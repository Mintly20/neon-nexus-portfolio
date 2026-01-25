import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/pushkaran23', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pushkaran', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pushprakash23@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(to top, hsl(var(--neon-cyan) / 0.05), transparent 50%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="text-2xl font-bold text-gradient inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Pushkaran
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Blockchain Developer & Smart Contract Auditor building secure DeFi protocols and hunting vulnerabilities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-purple" />
                <span className="text-sm text-muted-foreground">Open to audit requests</span>
              </div>
              <div className="text-xs text-muted-foreground mt-4 font-mono">
                pushprakash23@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px w-full mb-6 origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.5), hsl(var(--neon-purple) / 0.5), transparent)'
          }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} Pushkaran • Built with <Heart className="w-3 h-3 text-neon-pink animate-pulse" /> in Web3
          </p>
          <p className="font-mono text-xs">
            Securing the decentralized future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
