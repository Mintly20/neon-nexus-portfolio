import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: 'cyan' | 'purple' | 'blue' | 'pink';
  delay?: number;
}

const colorMap = {
  cyan: {
    bar: 'from-neon-cyan to-neon-blue',
    glow: 'shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)]',
    text: 'text-neon-cyan',
  },
  purple: {
    bar: 'from-neon-purple to-neon-pink',
    glow: 'shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)]',
    text: 'text-neon-purple',
  },
  blue: {
    bar: 'from-neon-blue to-neon-cyan',
    glow: 'shadow-[0_0_20px_hsl(var(--neon-blue)/0.5)]',
    text: 'text-neon-blue',
  },
  pink: {
    bar: 'from-neon-pink to-neon-purple',
    glow: 'shadow-[0_0_20px_hsl(var(--neon-pink)/0.5)]',
    text: 'text-neon-pink',
  },
};

const SkillBar = ({ name, level, color, delay = 0 }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const colors = colorMap[color];

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${colors.text}`}>{name}</span>
        <motion.span
          className="text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} ${colors.glow}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
