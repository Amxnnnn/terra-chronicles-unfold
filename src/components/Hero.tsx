import { motion } from 'framer-motion';
import Earth3D from './Earth3D';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3D Earth */}
      <div className="absolute inset-0 z-0">
        <Earth3D />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-aurora bg-clip-text text-transparent animate-aurora-wave">
            Terra
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-foreground">
            25 Years Watching Earth Evolve
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A quarter century of unprecedented Earth observation from space.
            Celebrating NASA's flagship mission that transformed our understanding
            of our living planet.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <div className="px-8 py-3 bg-card/30 backdrop-blur-sm border border-secondary/30 rounded-full">
              <span className="text-sm text-muted-foreground">2000 – 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-secondary" />
      </motion.div>
    </section>
  );
}
