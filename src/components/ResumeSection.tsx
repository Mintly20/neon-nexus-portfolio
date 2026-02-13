import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Background glow */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--neon-cyan) / 0.3), transparent 70%)'
            }}
          />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want to know more?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Download my resume for a complete overview of my skills, experience, and achievements in blockchain development.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="neonFilled"
                size="xl"
                className="pulse-glow"
                asChild
              >
                <a href="https://drive.google.com/file/d/1yVZ0fLkV9kuFV8yQ3h6KzWKL9j7EHNgN/view?usp=sharing" target="_blank">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
