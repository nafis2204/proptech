import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const basicFeatures = [
  "Access to ITES services portal",
  "PropTech automation dashboard",
  "Standard reporting tools",
  "Email & chat support",
  "Vendor coordination tools",
  "Monthly performance reports",
];

const premiumFeatures = [
  "Everything in Basic",
  "Advanced analytics & custom dashboards",
  "Priority 24/7 phone support",
  "Dedicated account manager",
  "Custom API integrations",
  "White-label reporting",
  "SLA-backed service guarantees",
  "Early access to new features",
];

const Membership = () => (
  <Layout>
    <section className="gradient-hero py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-4">
            Membership
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="font-heading font-extrabold text-4xl md:text-5xl text-hero-foreground mb-6">
            Choose the Plan That Fits Your Business
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-hero-muted">
            Start with Basic membership and upgrade to Premium as your operations scale.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-2xl border border-border bg-card p-8 shadow-card flex flex-col"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Basic</h3>
            <p className="text-muted-foreground mb-6">Essential ITES services and PropTech tool access for growing teams.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-foreground text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-teal-dark" asChild>
              <Link to="/contact">Sign Up for Basic</Link>
            </Button>
          </motion.div>

          {/* Premium */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="rounded-2xl border-2 border-accent bg-card p-8 shadow-teal flex flex-col relative"
          >
            <div className="absolute -top-3 left-8 bg-accent text-accent-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" /> Recommended
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Premium</h3>
            <p className="text-muted-foreground mb-6">Advanced features, priority support, and dedicated account management.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-foreground text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-teal-dark shadow-teal" asChild>
              <Link to="/contact">Upgrade to Premium</Link>
            </Button>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which plan is right for you?</p>
          <Button variant="outline" asChild>
            <Link to="/contact">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Membership;
