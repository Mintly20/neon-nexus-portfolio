import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Layers, Zap, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import SectionDivider from './SectionDivider';

const highlights = [
  {
    icon: Code2,
    title: 'Smart Contracts',
    description: 'Building secure, gas-optimized Solidity contracts with best practices',
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Identifying vulnerabilities before they become exploits',
    color: 'purple',
  },
  {
    icon: Layers,
    title: 'Web3 Integration',
    description: 'Seamless frontend experiences with blockchain backends',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Protocol Design',
    description: 'Architecting DeFi, NFT, and DAO ecosystems',
    color: 'pink',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { icon: string; bg: string; border: string }> = {
    cyan: {
      icon: 'text-neon-cyan',
      bg: 'bg-neon-cyan/10',
      border: 'border-neon-cyan/30 hover:border-neon-cyan/50',
    },
    purple: {
      icon: 'text-neon-purple',
      bg: 'bg-neon-purple/10',
      border: 'border-neon-purple/30 hover:border-neon-purple/50',
    },
    blue: {
      icon: 'text-neon-blue',
      bg: 'bg-neon-blue/10',
      border: 'border-neon-blue/30 hover:border-neon-blue/50',
    },
    pink: {
      icon: 'text-neon-pink',
      bg: 'bg-neon-pink/10',
      border: 'border-neon-pink/30 hover:border-neon-pink/50',
    },
  };
  return colors[color] || colors.cyan;
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-mono mb-4"
          >
            // About Me
          </motion.span>
          <h2 className="section-heading">
            Building the <span className="text-gradient">Decentralized</span> Future
          </h2>
          <p className="section-subheading">
            One smart contract at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">blockchain developer</span> and 
                student with a deep fascination for decentralized systems. My journey in Web3 started with 
                curiosity about how trustless protocols could reshape finance and governance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in <span className="text-neon-cyan">Solidity development</span>, 
                <span className="text-neon-purple"> security auditing</span>, and building intuitive 
                Web3 frontends. I believe in writing code that's not just functional, but secure, 
                gas-efficient, and maintainable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not deploying contracts or hunting for vulnerabilities, you'll find me 
                exploring the latest DeFi protocols or diving deep into protocol documentation.
              </p>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: 10, suffix: '+', label: 'Projects Built' },
                { value: 5, suffix: '+', label: 'Audits Done' },
                { value: 4, suffix: '', label: 'Findings' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/20 border border-border/50"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Achievement badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm">
                <Target className="w-4 h-4" />
                1 High Severity Finding
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm">
                <Shield className="w-4 h-4" />
                3 Medium Findings
              </span>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border ${colorClasses.border} transition-all duration-300 hover:shadow-lg`}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-xl ${colorClasses.bg} opacity-0 hover:opacity-100 transition-opacity -z-10`} />
                  
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="container mx-auto px-6 mt-16">
        <SectionDivider variant="gradient" />
      </div>
    </section>
  );
};

export default AboutSection;
