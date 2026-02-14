import { motion } from "framer-motion";
import { Handshake, TrendingUp, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const benefits = [
  { icon: Globe, title: "Market Access", desc: "Tap into the US & Canadian real estate markets through our established networks." },
  { icon: TrendingUp, title: "Revenue Growth", desc: "Grow your business with our comprehensive service portfolio and client base." },
  { icon: Headphones, title: "Full Support", desc: "Dedicated partner management and co-marketing opportunities." },
  { icon: Handshake, title: "Collaboration", desc: "Work alongside our ITES, BPO, and PropTech teams on joint projects." },
];

const Partner = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Partnership inquiry sent!", description: "We'll get back to you at hello@renovoproptech.com." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              Partnership
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
              Become a Partner
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
              Join forces with Renovo Proptech to deliver exceptional property and ITES solutions across North America.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            label="Why Partner With Us"
            title="Partnership Benefits"
            description="Leverage our expertise, technology, and market presence to grow your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-6 rounded-xl bg-card border border-border shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mx-auto mb-4">
                  <b.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Inquiry Form */}
          <div className="max-w-xl mx-auto">
            <SectionHeading title="Partner Inquiry" description="Fill out the form below and our partnership team will reach out." />
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
              <Textarea placeholder="Tell us about your partnership interests..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal">
                Become a Partner Today
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
