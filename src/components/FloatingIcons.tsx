import { motion } from 'framer-motion';

const icons = [
  { symbol: '₿', delay: 0, x: '10%', y: '20%', size: 'text-3xl' },
  { symbol: 'Ξ', delay: 0.5, x: '85%', y: '15%', size: 'text-4xl' },
  { symbol: '⟠', delay: 1, x: '75%', y: '70%', size: 'text-2xl' },
  { symbol: '◈', delay: 1.5, x: '15%', y: '75%', size: 'text-3xl' },
  { symbol: '⬡', delay: 2, x: '90%', y: '45%', size: 'text-2xl' },
  { symbol: '⧫', delay: 2.5, x: '5%', y: '50%', size: 'text-xl' },
  { symbol: '◎', delay: 3, x: '50%', y: '85%', size: 'text-2xl' },
  { symbol: '⬢', delay: 3.5, x: '30%', y: '10%', size: 'text-xl' },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.size} font-mono`}
          style={{
            left: icon.x,
            top: icon.y,
            color: 'hsl(var(--neon-cyan) / 0.15)',
            textShadow: '0 0 20px hsl(var(--neon-cyan) / 0.3)',
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8 + index * 0.5,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
