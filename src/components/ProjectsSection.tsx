import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Lock, Coins, Image, Users } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'DeFi Lending Protocol',
    description: 'A decentralized lending platform with flash loans, liquidation mechanisms, and dynamic interest rates based on utilization.',
    icon: Coins,
    tech: ['Solidity', 'Foundry', 'React', 'Wagmi'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'cyan',
  },
  {
    title: 'NFT Marketplace',
    description: 'Full-featured NFT marketplace with lazy minting, royalty enforcement, and auction functionality.',
    icon: Image,
    tech: ['Solidity', 'Hardhat', 'Next.js', 'Ethers.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'purple',
  },
  {
    title: 'CodeHawks First Flights',
    description: 'Participated in competitive smart contract audits including MultiSig Timelock, Token-0x, and more. Awarded 1 High and 3 Medium severity findings.',
    icon: Lock,
    tech: ['Slither', 'Mythril', 'Manual Review', 'CodeHawks'],
    github: 'https://codehawks.com',
    color: 'blue',
  },
  {
    title: 'DAO Governance System',
    description: 'On-chain governance with proposal creation, voting delegation, and timelock execution.',
    icon: Users,
    tech: ['Solidity', 'OpenZeppelin', 'React', 'TheGraph'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'pink',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { icon: string; border: string; glow: string }> = {
    cyan: {
      icon: 'text-neon-cyan',
      border: 'group-hover:border-neon-cyan/50',
      glow: 'group-hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.2)]',
    },
    purple: {
      icon: 'text-neon-purple',
      border: 'group-hover:border-neon-purple/50',
      glow: 'group-hover:shadow-[0_0_40px_hsl(var(--neon-purple)/0.2)]',
    },
    blue: {
      icon: 'text-neon-blue',
      border: 'group-hover:border-neon-blue/50',
      glow: 'group-hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.2)]',
    },
    pink: {
      icon: 'text-neon-pink',
      border: 'group-hover:border-neon-pink/50',
      glow: 'group-hover:shadow-[0_0_40px_hsl(var(--neon-pink)/0.2)]',
    },
  };
  return colors[color] || colors.cyan;
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">
            Smart contracts and dApps showcasing blockchain development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group glass-card p-6 transition-all duration-500 border border-border/50 ${colorClasses.border} ${colorClasses.glow}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center ${colorClasses.icon}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="neon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
