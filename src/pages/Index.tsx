import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Headphones, Monitor, Wrench, CheckCircle, ArrowRight, Users, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
};

const services = [
{
  icon: Wrench,
  title: "Property Preservation & Maintenance",
  desc: "Inspections, reporting, and vendor coordination for US & Canadian real estate portfolios."
},
{
  icon: Monitor,
  title: "ITES & Back Office Support",
  desc: "CRM management, data entry, lead management, and detailed reporting for efficiency."
},
{
  icon: Headphones,
  title: "BPO & Call Center Services",
  desc: "Inbound and outbound call center support tailored for the US real estate market."
},
{
  icon: Building2,
  title: "PropTech Software & Automation",
  desc: "Workflow automation, dashboards, and digital reporting tools for modern property management."
}];


const whyChoose = [
{ icon: Globe, title: "Global Reach", desc: "Serving USA & Canada from our Dhaka operations center." },
{ icon: Zap, title: "Smart Automation", desc: "PropTech tools that cut manual work by up to 60%." },
{ icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security with 99.9% uptime guarantee." },
{ icon: Users, title: "Expert Team", desc: "Trained ITES, BPO, and PropTech specialists on your side." }];


const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl">

            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">

              ITES · Property · BPO · PropTech
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-hero-foreground mb-6">

              Streamline Your Property Operations with{" "}
              <span className="text-gradient-teal">Smart Technology</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-hero-muted mb-8 leading-relaxed">

              Expert ITES support, BPO services, and cutting-edge PropTech automation tools—built for the US & Canadian real estate market.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="End-to-End Property & Back-Office Solutions"
            description="From property inspections to PropTech automation, we provide everything you need to scale your real estate operations efficiently." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) =>
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">

                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">Explore All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <SectionHeading
            light
            label="Why Renovo Proptech"
            title="Built for Scale. Designed for Results."
            description="We combine deep domain expertise in real estate with cutting-edge technology to deliver measurable outcomes." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) =>
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="text-center">

                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-hero-foreground">{item.title}</h3>
                <p className="text-sm text-hero-muted">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="rounded-2xl bg-teal-light p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Ready to Streamline Your Operations?</h2>
              <p className="text-muted-foreground mb-2">Get in touch to learn how our ITES services and PropTech automation tools can transform your business.</p>
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      {/*
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            label="Trusted By"
            title="Clients Across North America"
            description="Property management companies, real estate firms, and BPO clients trust Renovo Proptech to deliver results." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
            {["Property Corp", "RealEstate Pro", "US Homes Inc", "CanadaRealty"].map((name) => (
              <div key={name} className="font-heading font-bold text-lg text-foreground">{name}</div>
            ))}
          </div>
        </div>
      </section>
    */}

    </Layout>);

};

export default Index;
