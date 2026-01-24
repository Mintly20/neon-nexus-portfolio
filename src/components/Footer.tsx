import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/pushkaran23', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pushkaran', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pushprakash23@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(to top, hsl(var(--neon-cyan) / 0.05), transparent)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-xl font-bold text-gradient inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Pushkaran
            </motion.a>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © {currentYear} • Built with <Heart className="w-3 h-3 text-neon-pink inline animate-pulse" /> in Web3
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-px w-full mt-8 origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.5), hsl(var(--neon-purple) / 0.5), transparent)'
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
