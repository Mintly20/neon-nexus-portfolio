import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Blockchain Developer',
    issuer: 'Blockchain Council',
    date: '2025',
    link: '#',
    skills: ['Solidity', 'Smart Contracts'],
  },
  {
    title: 'Smart Contract Security',
    issuer: 'Consensys Academy',
    date: '2025',
    link: '#',
    skills: ['Auditing', 'Best Practices'],
  },
  {
    title: 'Foundry Fundamentals',
    issuer: 'Cyfrin Updraft',
    date: '2025',
    link: '#',
    skills: ['Testing', 'Deployment'],
  },
  {
    title: 'DeFi Security',
    issuer: 'Immunefi',
    date: '2025',
    link: '#',
    skills: ['Bug Bounty', 'Vulnerability Research'],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
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
            className="inline-block px-4 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-sm font-mono mb-4"
          >
            ✓ Verified
          </motion.span>
          <h2 className="section-heading">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subheading">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-neon-cyan/40 transition-all duration-300 block overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-neon-cyan transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                
                <div className="flex items-center gap-1 mb-3">
                  <CheckCircle className="w-3 h-3 text-neon-cyan" />
                  <span className="text-xs text-neon-purple font-mono">{cert.date}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-muted/30 text-muted-foreground font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
