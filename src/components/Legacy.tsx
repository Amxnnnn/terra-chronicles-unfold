import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Satellite, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Legacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const missions = [
    { name: "Aqua", year: "2002", status: "Active" },
    { name: "Aura", year: "2004", status: "Active" },
    { name: "Suomi NPP", year: "2011", status: "Active" },
    { name: "JPSS Series", year: "2017+", status: "Active" },
    { name: "PACE", year: "2024", status: "Active" },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-space-deep to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <Satellite className="w-20 h-20 text-accent animate-float-slow" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A Legacy That <span className="bg-gradient-solar bg-clip-text text-transparent">Continues</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Terra paved the way for a new generation of Earth observation satellites.
            Its groundbreaking technology and scientific achievements inspired
            missions that continue to build upon its 25-year foundation.
          </p>
        </motion.div>

        {/* Mission cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={mission.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 group hover:shadow-glow-aurora"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
                  {mission.name}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                  {mission.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Launched {mission.year}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-card/80 to-card/40 border border-secondary/30 rounded-2xl p-12 backdrop-blur-sm text-center"
        >
          <blockquote className="mb-8">
            <p className="text-2xl md:text-3xl font-light text-foreground mb-6 leading-relaxed">
              "As I continue my endless orbit, watching seasons change and climate evolve,
              new satellites join my vigil. Together, we stand as humanity's eyes in the sky,
              documenting the story of Earth for generations to come."
            </p>
            <footer className="text-accent text-lg font-medium">— Terra's Legacy</footer>
          </blockquote>

          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow-aurora group"
          >
            Explore the Data
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
