import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillBar from './SkillBar';

const skillCategories = [
  {
    title: 'Blockchain & Smart Contracts',
    color: 'cyan' as const,
    skills: [
      { name: 'Solidity', level: 90 },
      { name: 'Foundry', level: 85 },
      { name: 'Hardhat', level: 80 },
      { name: 'OpenZeppelin', level: 85 },
    ],
    tags: ['EVM', 'Chainlink', 'ERC Standards'],
  },
  {
    title: 'Web3 Frontend',
    color: 'purple' as const,
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'Ethers.js / Viem', level: 85 },
      { name: 'Wagmi', level: 82 },
      { name: 'RainbowKit', level: 78 },
    ],
    tags: ['TypeScript', 'TailwindCSS', 'Web3.js'],
  },
  {
    title: 'Security & Auditing',
    color: 'blue' as const,
    skills: [
      { name: 'Manual Review', level: 85 },
      { name: 'Slither', level: 80 },
      { name: 'Mythril', level: 75 },
      { name: 'Fuzzing', level: 78 },
    ],
    tags: ['Vulnerability Analysis', 'Formal Verification'],
  },
  {
    title: 'Domains',
    color: 'pink' as const,
    skills: [
      { name: 'DeFi Protocols', level: 88 },
      { name: 'NFT Standards', level: 82 },
      { name: 'DAO Governance', level: 75 },
      { name: 'Token Economics', level: 80 },
    ],
    tags: ['MEV', 'L2 Solutions', 'Cross-chain'],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { border: string; text: string; glow: string; bg: string }> = {
    cyan: {
      border: 'border-neon-cyan/30 hover:border-neon-cyan/60',
      text: 'text-neon-cyan',
      glow: 'hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.2)]',
      bg: 'bg-neon-cyan/5',
    },
    purple: {
      border: 'border-neon-purple/30 hover:border-neon-purple/60',
      text: 'text-neon-purple',
      glow: 'hover:shadow-[0_0_40px_hsl(var(--neon-purple)/0.2)]',
      bg: 'bg-neon-purple/5',
    },
    blue: {
      border: 'border-neon-blue/30 hover:border-neon-blue/60',
      text: 'text-neon-blue',
      glow: 'hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.2)]',
      bg: 'bg-neon-blue/5',
    },
    pink: {
      border: 'border-neon-pink/30 hover:border-neon-pink/60',
      text: 'text-neon-pink',
      glow: 'hover:shadow-[0_0_40px_hsl(var(--neon-pink)/0.2)]',
      bg: 'bg-neon-pink/5',
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
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.15), transparent 60%)' }}
        />
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
            {'<'} Technical Stack {'>'}
          </motion.span>
          <h2 className="section-heading">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subheading">
            Building with cutting-edge blockchain technologies
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
                className={`group relative rounded-xl border ${colorClasses.border} ${colorClasses.bg} ${colorClasses.glow} p-6 transition-all duration-500 backdrop-blur-sm`}
              >
                {/* Gradient line at top */}
                <div 
                  className={`absolute top-0 left-6 right-6 h-px opacity-50`}
                  style={{
                    background: `linear-gradient(90deg, transparent, hsl(var(--neon-${category.color})), transparent)`,
                  }}
                />

                <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${colorClasses.text}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {category.title}
                </h3>
                
                {/* Skill Bars */}
                <div className="space-y-4 mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>

                {/* Additional tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-xs rounded font-mono ${colorClasses.text} opacity-60`}
                    >
                      #{tag.toLowerCase().replace(/\s/g, '')}
                    </span>
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
