import { motion } from "framer-motion";
import { BookOpen, Users, ClipboardList, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const sections = [
  {
    icon: Users,
    title: "Who We're Looking For",
    items: [
      "ITES & Data Entry Specialists",
      "BPO & Call Center Agents (English fluency required)",
      "PropTech Software Developers",
      "Quality Assurance Analysts",
      "Team Leads & Operations Coordinators",
    ],
  },
  {
    icon: BookOpen,
    title: "Training & Onboarding",
    items: [
      "Comprehensive orientation program covering all service lines",
      "ITES tools and CRM platform training",
      "BPO call handling and quality standards",
      "PropTech software hands-on workshops",
      "Ongoing mentorship and skill development",
    ],
  },
  {
    icon: ClipboardList,
    title: "SOPs & Reporting",
    items: [
      "Standardized operating procedures for every workflow",
      "Daily, weekly, and monthly reporting cadence",
      "Quality assurance checkpoints at each process stage",
      "Performance metrics and KPI tracking",
      "Continuous improvement feedback loops",
    ],
  },
];

const Careers = () => (
  <Layout>
    <section className="gradient-hero py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
            Careers
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
            Join Our Growing Team
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
            Build your career in ITES, BPO, and PropTech with Renovo Proptech. We invest in your growth from day one.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className={`mb-16 ${idx < sections.length - 1 ? "pb-16 border-b border-border" : ""}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center">
                <section.icon className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">{section.title}</h2>
            </div>
            <ul className="space-y-3 ml-15">
              {section.items.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact HR */}
        <div className="text-center rounded-2xl bg-teal-light p-10">
          <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Interested in Joining?</h3>
          <p className="text-muted-foreground mb-6">
            Send your resume and cover letter to our HR team. We'd love to hear from you.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal" asChild>
            <a href="mailto:hello@renovoproptech.com">Apply Now — hello@renovoproptech.com</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
