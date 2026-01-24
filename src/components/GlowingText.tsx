import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlowingText = ({ children, className = '', delay = 0 }: GlowingTextProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, textShadow: 'none' }}
      animate={{ 
        opacity: 1,
        textShadow: [
          '0 0 10px hsl(var(--neon-cyan) / 0.5), 0 0 20px hsl(var(--neon-cyan) / 0.3), 0 0 30px hsl(var(--neon-cyan) / 0.2)',
          '0 0 20px hsl(var(--neon-cyan) / 0.8), 0 0 40px hsl(var(--neon-cyan) / 0.5), 0 0 60px hsl(var(--neon-cyan) / 0.3)',
          '0 0 10px hsl(var(--neon-cyan) / 0.5), 0 0 20px hsl(var(--neon-cyan) / 0.3), 0 0 30px hsl(var(--neon-cyan) / 0.2)',
        ]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        textShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={`text-neon-cyan ${className}`}
      style={{
        textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.5), 0 0 20px hsl(var(--neon-cyan) / 0.3)',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GlowingText;
