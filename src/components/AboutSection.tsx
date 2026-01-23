import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Layers, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Smart Contracts',
    description: 'Building secure, gas-optimized Solidity contracts',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Identifying vulnerabilities before they become exploits',
  },
  {
    icon: Layers,
    title: 'Web3 Integration',
    description: 'Seamless frontend experiences with blockchain backends',
  },
  {
    icon: Zap,
    title: 'Protocol Design',
    description: 'Architecting DeFi, NFT, and DAO ecosystems',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading">
            Building the decentralized future, one smart contract at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
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
              exploring the latest DeFi protocols, contributing to open-source projects, or 
              diving deep into protocol documentation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Audits Done' },
                { value: '3+', label: 'Hackathons' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
