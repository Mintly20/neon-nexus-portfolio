import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import MatrixRain from './MatrixRain';
import GlowingText from './GlowingText';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 bg-background">
        <MatrixRain />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Large Glowing Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              style={{
                textShadow: '0 0 40px hsl(var(--neon-cyan) / 0.5), 0 0 80px hsl(var(--neon-cyan) / 0.3), 0 0 120px hsl(var(--neon-cyan) / 0.2)',
              }}
            >
              <GlowingText>Pushkaran</GlowingText>
            </h1>
          </motion.div>

          {/* Blinking Cursor Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-4 h-8 md:w-6 md:h-10 bg-neon-cyan"
              style={{
                boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.8), 0 0 40px hsl(var(--neon-cyan) / 0.4)',
              }}
            />
          </motion.div>
          
          {/* Handle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-neon-cyan font-mono text-lg md:text-xl mb-4"
            style={{
              textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.5)',
            }}
          >
            @pushkaran_dev
          </motion.p>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4"
          >
            Blockchain Developer & Smart Contract Auditor
          </motion.h2>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-neon-cyan/80 font-mono text-sm md:text-base mb-4"
            style={{
              textShadow: '0 0 5px hsl(var(--neon-cyan) / 0.3)',
            }}
          >
            Building secure DeFi protocols | Securing the future of Web3
          </motion.p>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-neon-cyan/60 mb-8"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-mono text-sm">India</span>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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
                transition={{ delay: 0.9 + index * 0.1 }}
                className="group relative p-4 border-2 border-neon-cyan/50 rounded-lg hover:border-neon-cyan transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px hsl(var(--neon-cyan) / 0.2)',
                }}
                whileHover={{
                  boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5), 0 0 60px hsl(var(--neon-cyan) / 0.3)',
                  scale: 1.05,
                }}
              >
                <social.icon className="w-6 h-6 text-neon-cyan" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="neonFilled" size="lg" asChild>
              <a href="#projects">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neon-cyan/60 hover:text-neon-cyan transition-colors"
          >
            <span className="text-xs font-mono">SCROLL_DOWN</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
