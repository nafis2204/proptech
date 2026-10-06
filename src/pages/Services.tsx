import { motion } from "framer-motion";
import { Wrench, Monitor, Headphones, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceDetails = [
  {
    icon: Wrench,
    title: "Property Preservation & Maintenance",
    desc: "Comprehensive property inspection, preservation, and maintenance services for US and Canadian real estate portfolios.",
    features: [
      "Field inspections with photo-documented reports",
      "Vendor coordination and work order management",
      "Compliance tracking and regulatory reporting",
      "Seasonal maintenance scheduling",
    ],
    workflow: "Assign → Inspect → Report → Coordinate → Resolve",
  },
  {
    icon: Monitor,
    title: "ITES & Back Office Support",
    desc: "Full-spectrum IT-enabled services to streamline your back-office operations and boost productivity.",
    features: [
      "CRM data management and lead tracking",
      "Data entry, validation, and cleansing",
      "Detailed reporting and analytics",
      "Document processing and digital archiving",
    ],
    workflow: "Intake → Process → Validate → Report → Optimize",
  },
  {
    icon: Headphones,
    title: "BPO & Call Center Services",
    desc: "Dedicated inbound and outbound call center services tailored specifically for the US real estate market.",
    features: [
      "Inbound customer support and query resolution",
      "Outbound lead qualification and appointment setting",
      "Tenant communication and follow-ups",
      "Multi-channel support (phone, email, chat)",
    ],
    workflow: "Connect → Qualify → Resolve → Follow-up → Report",
  },
  {
    icon: Building2,
    title: "PropTech Software & Automation",
    desc: "Cutting-edge workflow automation tools, dashboards, and digital reporting platforms for modern property management.",
    features: [
      "Custom workflow automation engines",
      "Real-time dashboards and KPI tracking",
      "Digital inspection and reporting tools",
      "API integrations with major property platforms",
    ],
    workflow: "Automate → Monitor → Analyze → Optimize → Scale",
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-hero py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
            Our Services
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
            Comprehensive Solutions for Real Estate Operations
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
            From on-ground property preservation to intelligent PropTech automation—we've got every aspect of your operations covered.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Service Sections */}
    {serviceDetails.map((service, idx) => (
      <section key={service.title} className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="container">
          <div className={`flex flex-col lg:flex-row items-start gap-12 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-accent" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading font-bold text-3xl mb-4 text-foreground">
                {service.title}
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {service.desc}
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} custom={4}>
                <Button className="bg-accent text-accent-foreground hover:bg-teal-dark" asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Workflow card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="flex-1 w-full"
            >
              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Workflow</h4>
                <div className="flex flex-wrap gap-3">
                  {service.workflow.split(" → ").map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-heading font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-foreground font-medium">{step}</span>
                      {i < service.workflow.split(" → ").length - 1 && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Membership Access:</strong> Available through Basic membership with optional Premium upgrade for advanced features.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-20 gradient-hero">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-3xl text-hero-foreground mb-4">Ready to Transform Your Operations?</h2>
        <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">
          Join hundreds of property management companies leveraging PropTech Solutions's expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-accent bg-transparent text-accent hover:bg-accent/10 hover:text-accent" asChild>
            <a href="mailto:hello@proptechsol.com">Email Us</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
