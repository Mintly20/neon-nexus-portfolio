import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, MapPin, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import MatrixRain from './MatrixRain';
import FloatingIcons from './FloatingIcons';
import HexGrid from './HexGrid';
import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';

const roles = [
  'Smart Contract Developer',
  'Security Auditor',
  'DeFi Builder',
  'Web3 Engineer',
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-background">
        <HexGrid />
        <MatrixRain />
        <FloatingIcons />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-neon-cyan/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-neon-purple/10 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal-style intro badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-8"
          >
            <Terminal className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-mono text-neon-cyan">Available for Web3 opportunities</span>
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          </motion.div>

          {/* Large Glowing Name with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              style={{
                textShadow: '0 0 40px hsl(var(--neon-cyan) / 0.5), 0 0 80px hsl(var(--neon-cyan) / 0.3)',
              }}
            >
              <GlitchText className="text-neon-cyan">Pushkaran</GlitchText>
            </h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-12 md:h-14 flex items-center justify-center mb-6"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              I'm a{' '}
              <TypewriterText
                texts={roles}
                className="text-gradient"
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </span>
          </motion.div>
          
          {/* Tagline with neon effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Building secure DeFi protocols and hunting vulnerabilities in smart contracts.
            <br className="hidden md:block" />
            <span className="text-neon-cyan">Securing the future of Web3, one audit at a time.</span>
          </motion.p>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="w-4 h-4 text-neon-purple" />
            <span className="font-mono text-sm">India</span>
            <span className="text-border">•</span>
            <span className="font-mono text-sm text-neon-cyan">@pushkaran_dev</span>
          </motion.div>
          
          {/* Social Links with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center gap-4 mb-10"
          >
            {[
              { icon: Github, href: 'https://github.com/pushkaran23', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group relative p-4 rounded-xl bg-muted/20 border border-border/50 hover:border-neon-cyan/50 transition-all duration-300"
                whileHover={{
                  boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.3), 0 0 60px hsl(var(--neon-cyan) / 0.15)',
                  scale: 1.05,
                  y: -5,
                }}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          {/* CTAs with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="neonFilled" size="lg" className="group" asChild>
              <a href="#projects">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
            </Button>
            <Button variant="neon" size="lg" className="group" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16 flex justify-center gap-8 md:gap-16"
          >
            {[
              { value: '10+', label: 'Projects' },
              { value: '5+', label: 'Audits' },
              { value: '4', label: 'Findings' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors group"
          >
            <span className="text-xs font-mono opacity-60 group-hover:opacity-100">SCROLL</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
