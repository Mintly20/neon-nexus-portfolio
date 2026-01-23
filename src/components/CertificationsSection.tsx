import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Blockchain Developer',
    issuer: 'Blockchain Council',
    date: '2024',
    link: '#',
  },
  {
    title: 'Smart Contract Security',
    issuer: 'Consensys Academy',
    date: '2024',
    link: '#',
  },
  {
    title: 'Foundry Fundamentals',
    issuer: 'Cyfrin Updraft',
    date: '2024',
    link: '#',
  },
  {
    title: 'DeFi Security',
    issuer: 'Immunefi',
    date: '2023',
    link: '#',
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
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card p-5 hover-lift block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-neon-cyan" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-neon-cyan transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-neon-purple">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
