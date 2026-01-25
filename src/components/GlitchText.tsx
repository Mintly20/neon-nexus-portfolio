import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="glitch"
    >
      {/* Main text */}
      <span className="relative z-10">{children}</span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-neon-cyan opacity-0"
        style={{ clipPath: 'inset(10% 0 60% 0)' }}
        variants={{
          glitch: {
            opacity: [0, 0.8, 0],
            x: [-2, 2, -2],
            transition: { duration: 0.2, repeat: 2 },
          },
        }}
      >
        {children}
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-neon-pink opacity-0"
        style={{ clipPath: 'inset(50% 0 20% 0)' }}
        variants={{
          glitch: {
            opacity: [0, 0.8, 0],
            x: [2, -2, 2],
            transition: { duration: 0.2, repeat: 2, delay: 0.1 },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;
