import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.jpeg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Animated glow rings */}
            <motion.div
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Secondary glow ring */}
            <motion.div
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 60%)',
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Rotating border ring */}
            <motion.div
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/30"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Photo container with transparency effect */}
            <motion.div
              className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay for transparency blend */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at center, transparent 50%, hsl(var(--background) / 0.3) 70%, hsl(var(--background) / 0.8) 100%)
                  `,
                }}
              />
              
              {/* Inner glow */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none rounded-full"
                style={{
                  boxShadow: 'inset 0 0 60px hsl(var(--primary) / 0.3)',
                }}
              />
              
              {/* Photo */}
              <img
                src={aboutPhoto}
                alt="Nimesh Manusha"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Floating particles around photo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/60"
                style={{
                  left: `${50 + 45 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                  top: `${50 + 45 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Outer glow effect */}
            <div 
              className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full blur-2xl opacity-40 -z-10"
              style={{
                background: 'hsl(var(--primary))',
              }}
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented IT engineering student with hands-on experience in web and mobile app development, networking and DevOps practices. Passionate about building scalable, user-friendly solutions using modern technologies like React, Node.js and Firebase.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seeking an opportunity to contribute my technical skills and innovative mindset to a dynamic organization, while continuing to grow in software development and cloud infrastructure.
            </p>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Malabe, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">nmanusha418.b@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">075 7595823</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
