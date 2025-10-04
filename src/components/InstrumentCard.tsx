import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface InstrumentCardProps {
  name: string;
  fullName: string;
  description: string;
  icon: ReactNode;
  color: 'aurora' | 'solar' | 'ocean';
  features: string[];
  discoveries: string[];
  delay?: number;
}

const colorClasses = {
  aurora: {
    border: 'border-secondary/30 hover:border-secondary/70',
    glow: 'hover:shadow-glow-aurora',
    icon: 'text-secondary',
    gradient: 'from-secondary/20 to-transparent'
  },
  solar: {
    border: 'border-accent/30 hover:border-accent/70',
    glow: 'hover:shadow-glow-solar',
    icon: 'text-accent',
    gradient: 'from-accent/20 to-transparent'
  },
  ocean: {
    border: 'border-earth-ocean/30 hover:border-earth-ocean/70',
    glow: 'hover:shadow-[0_0_30px_hsl(200_100%_35%_/_0.4)]',
    icon: 'text-earth-ocean',
    gradient: 'from-earth-ocean/20 to-transparent'
  }
};

export default function InstrumentCard({
  name,
  fullName,
  description,
  icon,
  color,
  features,
  discoveries,
  delay = 0
}: InstrumentCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const colors = colorClasses[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <Card className={`p-8 bg-card border ${colors.border} ${colors.glow} transition-all duration-500 group overflow-hidden relative`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{fullName}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className={`${colors.icon} mt-1`}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Discoveries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Key Discoveries
            </h4>
            <ul className="space-y-2">
              {discoveries.map((discovery, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className={`${colors.icon} mt-1`}>★</span>
                  <span>{discovery}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
