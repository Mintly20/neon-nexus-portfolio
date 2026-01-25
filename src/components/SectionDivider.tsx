import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'default' | 'glow' | 'gradient';
}

const SectionDivider = ({ variant = 'default' }: SectionDividerProps) => {
  if (variant === 'glow') {
    return (
      <div className="relative h-px w-full my-4">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.5), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-cyan"
          style={{
            boxShadow: '0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan) / 0.5)',
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="relative py-12 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px top-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(var(--neon-cyan) / 0.3) 20%, hsl(var(--neon-purple) / 0.3) 50%, hsl(var(--neon-blue) / 0.3) 80%, transparent 100%)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        {/* Animated pulse traveling along the line */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-20 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan)), transparent)',
            filter: 'blur(2px)',
          }}
          animate={{
            left: ['-10%', '110%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative h-24">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
