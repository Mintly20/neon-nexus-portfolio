import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Blockchain & Smart Contracts',
    color: 'cyan',
    skills: ['Solidity', 'Foundry', 'Hardhat', 'EVM', 'OpenZeppelin', 'Chainlink'],
  },
  {
    title: 'Web3 Frontend',
    color: 'purple',
    skills: ['React', 'Next.js', 'Ethers.js', 'Web3.js', 'Wagmi', 'Viem', 'RainbowKit'],
  },
  {
    title: 'Security & Auditing',
    color: 'blue',
    skills: ['Smart Contract Auditing', 'Vulnerability Analysis', 'Slither', 'Mythril', 'Fuzzing'],
  },
  {
    title: 'Domains',
    color: 'pink',
    skills: ['DeFi Protocols', 'NFT Standards', 'DAOs', 'Token Economics', 'MEV', 'L2 Solutions'],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    cyan: {
      bg: 'bg-neon-cyan/10',
      border: 'border-neon-cyan/30',
      text: 'text-neon-cyan',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]',
    },
    purple: {
      bg: 'bg-neon-purple/10',
      border: 'border-neon-purple/30',
      text: 'text-neon-purple',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]',
    },
    blue: {
      bg: 'bg-neon-blue/10',
      border: 'border-neon-blue/30',
      text: 'text-neon-blue',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.3)]',
    },
    pink: {
      bg: 'bg-neon-pink/10',
      border: 'border-neon-pink/30',
      text: 'text-neon-pink',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)]',
    },
  };
  return colors[color] || colors.cyan;
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.1), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading">
            Tools and technologies I use to build the decentralized web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`group glass-card p-6 transition-all duration-500 ${colorClasses.glow}`}
              >
                <h3 className={`text-lg font-semibold mb-4 ${colorClasses.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 text-sm rounded-full ${colorClasses.bg} border ${colorClasses.border} ${colorClasses.text} transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
