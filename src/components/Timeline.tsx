import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Flame, Mountain, Droplets, Wind, Sparkles } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  instrument?: string;
}

const events: TimelineEvent[] = [
  {
    year: "1999",
    title: "Terra Launches",
    description: "December 18, 1999 - Terra lifts off from Vandenberg Air Force Base, beginning its journey as NASA's flagship Earth observation mission.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: "2000",
    title: "First Blue Marble",
    description: "MODIS captures its first complete Earth image, creating the iconic 'Blue Marble' that showed our planet in unprecedented detail.",
    icon: <Sparkles className="w-6 h-6" />,
    instrument: "MODIS"
  },
  {
    year: "2009",
    title: "Australian Dust Storm",
    description: "MODIS captures a massive dust storm engulfing eastern Australia, one of the largest dust events in modern history.",
    icon: <Wind className="w-6 h-6" />,
    instrument: "MODIS"
  },
  {
    year: "2011",
    title: "Volcanic Eruptions",
    description: "ASTER provides detailed thermal imaging of multiple volcanic eruptions, helping scientists understand lava flow dynamics.",
    icon: <Mountain className="w-6 h-6" />,
    instrument: "ASTER"
  },
  {
    year: "2018",
    title: "Bering Sea Meteor",
    description: "MODIS detects the trail of a meteor over the Bering Sea, demonstrating Terra's ability to capture unexpected cosmic events.",
    icon: <Flame className="w-6 h-6" />,
    instrument: "MODIS"
  },
  {
    year: "2019",
    title: "Brumadinho Dam Disaster",
    description: "ASTER captures before and after images of the devastating dam collapse in Brazil, aiding disaster response efforts.",
    icon: <Droplets className="w-6 h-6" />,
    instrument: "ASTER"
  },
  {
    year: "2023",
    title: "MOPITT Retires",
    description: "After 23 years of monitoring atmospheric pollution, MOPITT concludes its mission, leaving a legacy of invaluable climate data.",
    icon: <Wind className="w-6 h-6" />,
    instrument: "MOPITT"
  },
  {
    year: "2025",
    title: "25 Years of Excellence",
    description: "Terra celebrates a quarter century in orbit, far exceeding its original 6-year mission and continuing to provide critical Earth science data.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const instrumentColors: Record<string, string> = {
  "MODIS": "text-secondary",
  "ASTER": "text-accent",
  "MOPITT": "text-earth-ocean",
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-mid via-background to-space-mid opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A Journey Through <span className="bg-gradient-solar bg-clip-text text-transparent">Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key moments and discoveries from Terra's 25-year mission
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary opacity-30" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Icon bubble */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-card border-2 border-secondary flex items-center justify-center shadow-glow-aurora">
                  <div className="text-secondary">
                    {event.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 group hover:shadow-glow-soft">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl font-bold text-accent">{event.year}</span>
                    {event.instrument && (
                      <span className={`text-xs px-3 py-1 rounded-full bg-muted ${instrumentColors[event.instrument] || 'text-foreground'}`}>
                        {event.instrument}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
