import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Satellite, Globe, Sparkles } from 'lucide-react';

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-space-mid to-background opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <Satellite className="w-16 h-16 text-secondary animate-float" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet <span className="bg-gradient-aurora bg-clip-text text-transparent">Terra</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Launched on December 18, 1999, Terra became NASA's flagship Earth-observing satellite,
            orbiting our planet 14 times daily at 705 kilometers above the surface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Globe className="w-12 h-12" />,
              title: "Global Coverage",
              description: "Complete Earth mapping every 1-2 days, capturing comprehensive data on land, atmosphere, and oceans",
              delay: 0.2
            },
            {
              icon: <Sparkles className="w-12 h-12" />,
              title: "Five Instruments",
              description: "ASTER, CERES, MISR, MODIS, and MOPITT working in harmony to monitor Earth's vital signs",
              delay: 0.4
            },
            {
              icon: <Satellite className="w-12 h-12" />,
              title: "25 Years Strong",
              description: "Far exceeding its planned 6-year mission, Terra continues delivering critical Earth science data",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-aurora">
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gradient-to-r from-card/50 to-card/30 border border-secondary/30 rounded-2xl p-12 backdrop-blur-sm"
        >
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-light italic text-foreground mb-6">
              "For 25 years, I've watched Earth's clouds swirl, ice sheets retreat, forests breathe,
              and cities grow. Every day, I circle our blue marble 14 times, witnessing the beauty
              and fragility of the only home we've ever known."
            </p>
            <footer className="text-secondary text-lg">— Terra's Voice</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
