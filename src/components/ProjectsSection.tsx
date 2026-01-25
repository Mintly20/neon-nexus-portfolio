import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Lock, Coins, Image, Shield } from 'lucide-react';
import { Button } from './ui/button';
import TiltCard from './TiltCard';

const projects = [
  {
    title: 'ERC20 Staking Contract',
    description: 'A staking platform allowing users to stake ERC20 tokens, earn rewards, and manage their staked positions with flexible withdrawal.',
    icon: Coins,
    tech: ['Solidity', 'Foundry', 'React', 'Ethers.js'],
    github: 'https://github.com/pushkaran23',
    demo: 'https://demo.com',
    color: 'cyan',
    featured: true,
  },
  {
    title: 'CodeHawks First Flights',
    description: 'Participated in competitive smart contract audits including MultiSig Timelock, Token-0x. Awarded 1 High and 3 Medium severity findings.',
    icon: Shield,
    tech: ['Slither', 'Mythril', 'Manual Review', 'CodeHawks'],
    github: 'https://codehawks.com',
    color: 'purple',
    badge: '4 Findings',
  },
  {
    title: 'DeFi Lending Protocol',
    description: 'A decentralized lending platform with flash loans, liquidation mechanisms, and dynamic interest rates based on utilization.',
    icon: Coins,
    tech: ['Solidity', 'Foundry', 'React', 'Wagmi'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'blue',
  },
  {
    title: 'NFT Marketplace',
    description: 'Full-featured NFT marketplace with lazy minting, royalty enforcement, and auction functionality.',
    icon: Image,
    tech: ['Solidity', 'Hardhat', 'Next.js', 'Ethers.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'pink',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { icon: string; border: string; glow: string; gradient: string }> = {
    cyan: {
      icon: 'text-neon-cyan',
      border: 'group-hover:border-neon-cyan/50',
      glow: 'group-hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.25)]',
      gradient: 'from-neon-cyan/20 to-neon-blue/20',
    },
    purple: {
      icon: 'text-neon-purple',
      border: 'group-hover:border-neon-purple/50',
      glow: 'group-hover:shadow-[0_0_50px_hsl(var(--neon-purple)/0.25)]',
      gradient: 'from-neon-purple/20 to-neon-pink/20',
    },
    blue: {
      icon: 'text-neon-blue',
      border: 'group-hover:border-neon-blue/50',
      glow: 'group-hover:shadow-[0_0_50px_hsl(var(--neon-blue)/0.25)]',
      gradient: 'from-neon-blue/20 to-neon-cyan/20',
    },
    pink: {
      icon: 'text-neon-pink',
      border: 'group-hover:border-neon-pink/50',
      glow: 'group-hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.25)]',
      gradient: 'from-neon-pink/20 to-neon-purple/20',
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-mono mb-4"
          >
            {'{'} Portfolio {'}'}
          </motion.span>
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">
            Smart contracts and dApps showcasing blockchain development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className={`group relative h-full rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 ${colorClasses.border} ${colorClasses.glow}`}>
                  <div className="p-6 h-full flex flex-col">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Featured/Badge indicator */}
                    {(project.featured || project.badge) && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <span className={`px-3 py-1 text-xs font-mono rounded-full ${project.featured ? 'bg-neon-cyan text-background' : 'bg-neon-purple text-background'}`}>
                          {project.featured ? 'Featured' : project.badge}
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="relative z-10 flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center ${colorClasses.icon} border border-current/20`}>
                        <project.icon className="w-7 h-7" />
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-border/30">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground font-mono border border-border/50 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="neon" size="lg" className="group" asChild>
            <a href="https://github.com/pushkaran23" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
