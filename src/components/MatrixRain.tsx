import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - blockchain/code themed
    const chars = '₿ΞⓃ⟠01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!~';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track drop position of each column
    const drops: number[] = Array(columns).fill(1);
    
    // Randomize initial positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(5, 8, 12, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Gradient effect - brighter at the head
        const brightness = Math.random();
        if (brightness > 0.98) {
          ctx.fillStyle = '#ffffff';
        } else if (brightness > 0.9) {
          ctx.fillStyle = '#00ffd5';
        } else {
          ctx.fillStyle = `rgba(0, 255, 170, ${0.3 + brightness * 0.4})`;
        }
        
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop to top with random delay
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i] += 0.5 + Math.random() * 0.5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-40"
      style={{ background: 'transparent' }}
    />
  );
};

export default MatrixRain;
