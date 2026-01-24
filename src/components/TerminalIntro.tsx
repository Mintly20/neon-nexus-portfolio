import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalIntroProps {
  onComplete: () => void;
}

const TerminalIntro = ({ onComplete }: TerminalIntroProps) => {
  const [lines, setLines] = useState<{ text: string; status?: string }[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);

  const terminalLines = [
    { text: '> INITIALIZING PUSHKARAN PORTFOLIO SYSTEM...', delay: 0 },
    { text: '> SMART_CONTRACTS.............................OK', delay: 300 },
    { text: '> SOLIDITY_CORE...............................OK', delay: 500 },
    { text: '> SECURITY_AUDITS.............................OK', delay: 700 },
    { text: '> DEFI_PROTOCOLS..............................OK', delay: 900 },
    { text: '> WEB3_FRONTEND...............................OK', delay: 1100 },
    { text: '> CONNECTING TO BLOCKCHAIN...', delay: 1300 },
    { text: '> CONNECTION ESTABLISHED', delay: 1600 },
    { text: '> DECRYPTING PORTFOLIO DATA...', delay: 1800 },
    { text: '> ACCESS GRANTED', delay: 2100 },
    { text: '> WELCOME TO THE BLOCKCHAIN', delay: 2400 },
  ];

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const timeouts: NodeJS.Timeout[] = [];
    
    terminalLines.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { text }]);
      }, delay);
      timeouts.push(timeout);
    });

    // Complete animation
    const completeTimeout = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 600);
    }, 3000);
    timeouts.push(completeTimeout);

    return () => {
      clearInterval(cursorInterval);
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Matrix rain effect in background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-neon-cyan font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: -20,
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'linear',
                }}
              >
                {Array.from({ length: 10 + Math.floor(Math.random() * 15) }).map((_, j) => (
                  <div key={j} style={{ opacity: 1 - j * 0.05 }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Terminal content */}
          <div className="relative max-w-2xl w-full mx-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-sm md:text-base space-y-1"
            >
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    line.text.includes('OK') 
                      ? 'text-neon-cyan' 
                      : line.text.includes('GRANTED') || line.text.includes('WELCOME')
                        ? 'text-neon-cyan font-bold'
                        : line.text.includes('ESTABLISHED')
                          ? 'text-green-400'
                          : 'text-neon-cyan/80'
                  }`}
                >
                  {line.text}
                </motion.div>
              ))}
              
              {/* Blinking cursor */}
              <div className="flex items-center gap-1 mt-4">
                <span className="text-neon-cyan">{'>'}</span>
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  className="w-3 h-5 bg-neon-cyan"
                />
              </div>
            </motion.div>
          </div>

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              setIsComplete(true);
              onComplete();
            }}
            className="absolute bottom-8 right-8 text-muted-foreground hover:text-neon-cyan transition-colors font-mono text-sm"
          >
            [SKIP →]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalIntro;
