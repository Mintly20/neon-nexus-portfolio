import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Code, Trophy, ArrowRight } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    title: 'Blockchain Developer Intern',
    company: 'Web3 Startup',
    period: '2025 - Present',
    description: 'Developing smart contracts for DeFi protocols, conducting security reviews, and building Web3 frontend interfaces.',
    icon: Briefcase,
    color: 'cyan',
  },
  {
    type: 'hackathon',
    title: 'ETHGlobal Hackathon',
    company: 'Participant - DeFi Track',
    period: '2025',
    description: 'Participated in building a cross-chain lending protocol with novel liquidation mechanism in the DeFi category.',
    icon: Trophy,
    color: 'purple',
  },
  {
    type: 'audit',
    title: 'Smart Contract Auditor',
    company: 'Independent',
    period: '2025 - Present',
    description: 'Conducted security audits for multiple DeFi protocols, identifying critical vulnerabilities and providing remediation guidance.',
    icon: Award,
    color: 'blue',
  },
  {
    type: 'opensource',
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2025 - Present',
    description: 'Contributing to Web3 libraries and tools, including bug fixes, documentation, and feature implementations.',
    icon: Code,
    color: 'pink',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { dot: string; line: string; icon: string; border: string }> = {
    cyan: {
      dot: 'bg-neon-cyan shadow-[0_0_15px_hsl(var(--neon-cyan))]',
      line: 'from-neon-cyan/50',
      icon: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30',
      border: 'hover:border-neon-cyan/50',
    },
    purple: {
      dot: 'bg-neon-purple shadow-[0_0_15px_hsl(var(--neon-purple))]',
      line: 'from-neon-purple/50',
      icon: 'text-neon-purple bg-neon-purple/10 border-neon-purple/30',
      border: 'hover:border-neon-purple/50',
    },
    blue: {
      dot: 'bg-neon-blue shadow-[0_0_15px_hsl(var(--neon-blue))]',
      line: 'from-neon-blue/50',
      icon: 'text-neon-blue bg-neon-blue/10 border-neon-blue/30',
      border: 'hover:border-neon-blue/50',
    },
    pink: {
      dot: 'bg-neon-pink shadow-[0_0_15px_hsl(var(--neon-pink))]',
      line: 'from-neon-pink/50',
      icon: 'text-neon-pink bg-neon-pink/10 border-neon-pink/30',
      border: 'hover:border-neon-pink/50',
    },
  };
  return colors[color] || colors.cyan;
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent" />
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
            className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-mono mb-4"
          >
            {'<'} Journey {'>'}
          </motion.span>
          <h2 className="section-heading">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subheading">
            My path through the blockchain ecosystem
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/50 to-neon-pink/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${colorClasses.dot}`}>
                      <div className={`absolute inset-0 rounded-full ${colorClasses.dot} animate-ping opacity-30`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      className={`relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 ${colorClasses.border} transition-all duration-300 hover:shadow-lg`}
                    >
                      {/* Gradient accent line */}
                      <div 
                        className={`absolute ${isEven ? 'right-0' : 'left-0'} top-6 bottom-6 w-px`}
                        style={{
                          background: `linear-gradient(to bottom, transparent, hsl(var(--neon-${exp.color})), transparent)`,
                        }}
                      />

                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${colorClasses.icon}`}>
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-muted/30">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className={`text-sm mb-3 ${colorClasses.icon.split(' ')[0]}`}>{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
