import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, GitFork, Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const githubUsername = 'pushkaran';

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, hsl(var(--neon-purple) / 0.15), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            Open Source on <span className="text-gradient">GitHub</span>
          </h2>
          <p className="section-subheading">
            Check out my repositories and contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 text-center hover-lift">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center"
            >
              <Github className="w-10 h-10 text-foreground" />
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground mb-2">@{githubUsername}</h3>
            <p className="text-muted-foreground mb-6">
              Smart contracts, audits, and Web3 tools
            </p>

            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neon-cyan mb-1">
                  <Star className="w-4 h-4" />
                  <span className="font-bold">50+</span>
                </div>
                <span className="text-xs text-muted-foreground">Stars</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neon-purple mb-1">
                  <GitFork className="w-4 h-4" />
                  <span className="font-bold">20+</span>
                </div>
                <span className="text-xs text-muted-foreground">Forks</span>
              </div>
            </div>

            <Button variant="neonFilled" size="lg" asChild>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
