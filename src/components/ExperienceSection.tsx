import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Code, Trophy } from 'lucide-react';

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
    company: 'Winner - DeFi Track',
    period: '2025',
    description: 'Built a cross-chain lending protocol with novel liquidation mechanism. Won first place in the DeFi category.',
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
  const colors: Record<string, { dot: string; line: string; icon: string }> = {
    cyan: {
      dot: 'bg-neon-cyan shadow-[0_0_10px_hsl(var(--neon-cyan))]',
      line: 'from-neon-cyan/50',
      icon: 'text-neon-cyan bg-neon-cyan/10',
    },
    purple: {
      dot: 'bg-neon-purple shadow-[0_0_10px_hsl(var(--neon-purple))]',
      line: 'from-neon-purple/50',
      icon: 'text-neon-purple bg-neon-purple/10',
    },
    blue: {
      dot: 'bg-neon-blue shadow-[0_0_10px_hsl(var(--neon-blue))]',
      line: 'from-neon-blue/50',
      icon: 'text-neon-blue bg-neon-blue/10',
    },
    pink: {
      dot: 'bg-neon-pink shadow-[0_0_10px_hsl(var(--neon-pink))]',
      line: 'from-neon-pink/50',
      icon: 'text-neon-pink bg-neon-pink/10',
    },
  };
  return colors[color] || colors.cyan;
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subheading">
            My journey in the blockchain ecosystem
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 ${colorClasses.dot}`} />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 hover-lift"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses.icon}`}>
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-sm text-neon-cyan mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
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
