import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutPhoto from '@/assets/about-photo.jpeg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/nimesh-manusha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nimesh-manusha', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nmanusha418.b@gmail.com', label: 'Email' },
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg">Hello,</p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-gradient">Nimesh</span>
              <br />
              <span className="text-gradient">Manusha</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Networking & Mobile Computing
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Building scalable, user-friendly solutions with modern technologies
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/nimesh-manusha" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  Visit My GitHub
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Phone size={20} />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Avatar with transparent border */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
                animate={{
                  scale: [1.3, 1.5, 1.3],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Rotating dashed border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                style={{ transform: 'scale(1.15)' }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Photo container with transparency fade */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden animate-float">
                {/* Transparency gradient overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at center, transparent 40%, hsl(var(--background) / 0.2) 60%, hsl(var(--background) / 0.6) 80%, hsl(var(--background)) 100%)
                    `,
                  }}
                />
                
                {/* Inner glow */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none rounded-full"
                  style={{
                    boxShadow: 'inset 0 0 80px hsl(var(--primary) / 0.3)',
                  }}
                />
                
                {/* Photo */}
                <img
                  src={aboutPhoto}
                  alt="Nimesh Manusha - Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/70"
                  style={{
                    left: `${50 + 55 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                    top: `${50 + 55 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                  }}
                />
              ))}

              {/* Outer glow */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-50 -z-10"
                style={{
                  background: 'hsl(var(--primary))',
                  transform: 'scale(0.8)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};