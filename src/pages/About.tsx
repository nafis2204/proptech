import { motion } from "framer-motion";
import { Target, Eye, MapPin, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const team = [
  { name: "Operations Lead", role: "Property & ITES Operations" },
  { name: "Technology Director", role: "PropTech Software & Automation" },
  { name: "BPO Manager", role: "Call Center & Client Services" },
  { name: "HR & Training Lead", role: "Employee Onboarding & Development" },
];

const About = () => (
  <Layout>
    <section className="gradient-hero py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
            About Us
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
            Empowering Real Estate Through Technology
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
            PropTech Solutions Ltd is a Dhaka-based ITES, BPO, and PropTech company serving the US and Canadian real estate markets.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="p-8 rounded-xl bg-card border border-border shadow-card">
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Streamline property and back-office operations with smart technology and expert ITES support, enabling real estate businesses to scale efficiently while maintaining exceptional service quality.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="p-8 rounded-xl bg-card border border-border shadow-card">
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading PropTech and ITES partner for North American real estate companies, setting the standard for innovation, reliability, and operational excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-muted">
      <div className="container">
        <SectionHeading label="Our Team" title="Leadership" description="Experienced professionals driving innovation across ITES, BPO, and PropTech." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground">{t.name}</h4>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Location */}
    <section className="py-20 bg-background">
      <div className="container max-w-2xl text-center">
        <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
          <MapPin className="h-7 w-7 text-accent" />
        </div>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Location</h2>
        <p className="text-muted-foreground text-lg mb-2">Mokhakhali DOHS, 27 Road, House 351, 1st Floor</p>
        <p className="text-muted-foreground text-lg mb-2">Dhaka, Bangladesh</p>
        <p className="text-accent font-medium">hello@proptechsol.com</p>
      </div>
    </section>
  </Layout>
);

export default About;
