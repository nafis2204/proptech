import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      // contact.php lives in /public and is uploaded next to the site; it emails hello@proptechsol.com
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }
      toast({ title: "Message sent!", description: "We'll respond to your inquiry shortly." });
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      toast({
        title: "Message not sent",
        description:
          err instanceof Error && err.message !== "Failed to fetch"
            ? err.message
            : "Please try again, or email us at hello@proptechsol.com.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
              Contact
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
              Have questions? Ready to get started? Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-heading font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </motion.h2>
              <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                <Textarea placeholder="Your message..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                {/* Hidden spam trap: people never see it, bots fill it in */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                />
                <Button type="submit" size="lg" disabled={sending} className="w-full bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal">
                  {sending ? "Sending..." : "Contact Us Today"}
                </Button>
              </motion.form>
            </motion.div>

            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.div variants={fadeUp} custom={0} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Mokhakhali DOHS, 27 Road, House 351, 1st Floor<br />Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:hello@proptechsol.com" className="text-accent hover:underline">
                    hello@proptechsol.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                  <Facebook className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Facebook</h3>
                  <a href="https://www.facebook.com/share/1Bz3NaXRug/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Follow us on Facebook
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Sunday – Thursday: 9:00 AM – 6:00 PM (BST)<br />
                    US business hours coverage available
                  </p>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div variants={fadeUp} custom={3} className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">📍 Dhaka, Bangladesh — Mokhakhali DOHS</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
