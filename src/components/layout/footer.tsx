import { SouqLogo } from "@/components/ui/souq-logo";
import { Link } from "react-router-dom";
import React from "react";
import { ShellContext } from "@/components/layout/app-shell";
import { motion } from "framer-motion";
import { 
  Home, 
  Package, 
  Heart, 
  HelpCircle, 
  Store, 
  Shield, 
  FileText, 
  ArrowRight,
  Sparkles,
  Globe,
  Mail,
  Phone
} from "lucide-react";

export const Footer = ({ forceVisible = false }: { forceVisible?: boolean }) => {
  const inShell = React.useContext(ShellContext);
  const hidden = inShell && !forceVisible;
  
  const quickLinks = [
    { icon: Home, label: "About Rassooq", href: "/about" },
    { icon: Package, label: "Categories", href: "/category/all" },
    { icon: Package, label: "Orders & Returns", href: "/orders" },
    { icon: HelpCircle, label: "Help Center", href: "/help" },
    { icon: Store, label: "Seller Portal", href: "/sell" },
    { icon: Shield, label: "Privacy Policy", href: "/privacy" },
    { icon: FileText, label: "Terms & Conditions", href: "/terms" }
  ];

  const customerService = [
    { icon: Package, label: "Track Order", href: "/orders" },
    { icon: ArrowRight, label: "Returns & Refunds", href: "/returns" },
    { icon: Shield, label: "Shipping Policy", href: "/terms" },
    { icon: HelpCircle, label: "24/7 Support", href: "/help" }
  ];

  return (
    <footer className={hidden ? "hidden" : "relative bg-gradient-to-br from-secondary via-secondary/95 to-accent text-white mt-auto overflow-hidden"}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-premium p-6 rounded-2xl border border-white/10">
              <SouqLogo className="text-white mb-6 text-2xl" />
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                The future of shopping. Immersive experiences, premium quality, 
                and seamless delivery across the Middle East.
              </p>
              <div className="flex items-center gap-3 text-white/60">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-medium">Trusted by millions</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-3 text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              Customer Care
            </h3>
            <ul className="space-y-4">
              {customerService.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-3 text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="glass-premium p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-white/80">24/7 Support</span>
                </div>
                <p className="text-white font-semibold">+971 800 RASSOOQ</p>
              </div>
              <div className="glass-premium p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-white/80">Email</span>
                </div>
                <p className="text-white font-semibold">support@rassooq.com</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              &copy; 2024 Rassooq. All rights reserved. Building the future of commerce.
            </p>
            <div className="flex items-center gap-6 text-white/60">
              <span>Available in</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">العربية</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Français</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};