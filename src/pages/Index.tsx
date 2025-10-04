import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Instruments from '@/components/Instruments';
import Timeline from '@/components/Timeline';
import Legacy from '@/components/Legacy';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <Introduction />
        </div>
        
        <div id="instruments">
          <Instruments />
        </div>
        
        <div id="timeline">
          <Timeline />
        </div>
        
        <div id="legacy">
          <Legacy />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-space-deep to-transparent opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Terra Mission • NASA Earth Science Division
          </p>
          <p className="text-sm text-muted-foreground/60">
            Data and imagery courtesy of NASA/GSFC/LaRC/JPL, MISR Team
          </p>
          <p className="text-xs text-muted-foreground/40 mt-4">
            2000-2025 • 25 Years of Earth Observation Excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
