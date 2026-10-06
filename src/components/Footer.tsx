import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="gradient-hero text-hero-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="PropTech Solutions" className="h-8 w-auto" />
          </div>
          <p className="text-hero-muted text-sm leading-relaxed">
            Streamlining property and back-office operations with smart technology and expert ITES support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            {[
              { label: "Services", to: "/services" },
              { label: "About Us", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            <li>Property Preservation</li>
            <li>ITES & Back Office</li>
            <li>BPO & Call Center</li>
            <li>PropTech Automation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-hero-muted">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Flat-1B, House 351, Road 27, Mokhakhali DOHS, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-accent" />
              <a href="mailto:hello@proptechsol.com" className="hover:text-accent transition-colors">
                hello@proptechsol.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hero-muted/20 mt-12 pt-8 text-center text-sm text-hero-muted">
        <p>© {new Date().getFullYear()} PropTech Solutions Ltd. All rights reserved.</p>
        <p className="mt-1">
          Developed by{" "}
          <a href="https://rosetech.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            RoseTech Solutions Ltd
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
