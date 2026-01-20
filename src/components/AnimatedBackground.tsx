import { motion } from 'framer-motion';

const FloatingOrb = ({ 
  size, 
  color, 
  initialX, 
  initialY, 
  duration,
  delay = 0
}: { 
  size: number; 
  color: string; 
  initialX: string; 
  initialY: string; 
  duration: number;
  delay?: number;
}) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      left: initialX,
      top: initialY,
    }}
    animate={{
      x: [0, 100, -50, 80, 0],
      y: [0, -80, 60, -40, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const GridPattern = () => (
  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

const Particle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/40"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const MovingGradient = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none opacity-50"
    animate={{
      background: [
        'radial-gradient(ellipse at 0% 0%, hsl(199 89% 48% / 0.1), transparent 50%)',
        'radial-gradient(ellipse at 100% 0%, hsl(199 89% 48% / 0.1), transparent 50%)',
        'radial-gradient(ellipse at 100% 100%, hsl(199 89% 48% / 0.1), transparent 50%)',
        'radial-gradient(ellipse at 0% 100%, hsl(199 89% 48% / 0.1), transparent 50%)',
        'radial-gradient(ellipse at 0% 0%, hsl(199 89% 48% / 0.1), transparent 50%)',
      ],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const GlowLine = ({ direction }: { direction: 'horizontal' | 'vertical' }) => (
  <motion.div
    className={`absolute pointer-events-none ${
      direction === 'horizontal' 
        ? 'h-px w-[200px] left-0' 
        : 'w-px h-[200px] top-0'
    }`}
    style={{
      background: direction === 'horizontal'
        ? 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)'
        : 'linear-gradient(180deg, transparent, hsl(var(--primary) / 0.5), transparent)',
      top: direction === 'horizontal' ? '30%' : undefined,
      left: direction === 'vertical' ? '20%' : undefined,
    }}
    animate={
      direction === 'horizontal'
        ? { x: ['-200px', 'calc(100vw + 200px)'] }
        : { y: ['-200px', 'calc(100vh + 200px)'] }
    }
    transition={{
      duration: direction === 'horizontal' ? 8 : 10,
      repeat: Infinity,
      ease: "linear",
      delay: direction === 'vertical' ? 3 : 0,
    }}
  />
);

export const AnimatedBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Moving gradient spotlight */}
      <MovingGradient />
      
      {/* Grid pattern */}
      <GridPattern />
      
      {/* Floating orbs */}
      <FloatingOrb
        size={600}
        color="radial-gradient(circle, hsl(199 89% 48% / 0.15), transparent 70%)"
        initialX="60%"
        initialY="-10%"
        duration={25}
      />
      <FloatingOrb
        size={400}
        color="radial-gradient(circle, hsl(217 91% 60% / 0.12), transparent 70%)"
        initialX="-5%"
        initialY="40%"
        duration={20}
        delay={5}
      />
      <FloatingOrb
        size={500}
        color="radial-gradient(circle, hsl(280 70% 50% / 0.08), transparent 70%)"
        initialX="70%"
        initialY="60%"
        duration={22}
        delay={10}
      />
      <FloatingOrb
        size={300}
        color="radial-gradient(circle, hsl(199 89% 48% / 0.1), transparent 70%)"
        initialX="20%"
        initialY="80%"
        duration={18}
        delay={7}
      />
      
      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} x={particle.x} y={particle.y} delay={particle.delay} />
      ))}
      
      {/* Animated glow lines */}
      <GlowLine direction="horizontal" />
      <GlowLine direction="vertical" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
