import InstrumentCard from './InstrumentCard';
import { Mountain, Sun, Camera, Eye, Wind } from 'lucide-react';

export default function Instruments() {
  return (
    <section className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-space-deep to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Five Instruments, <span className="bg-gradient-aurora bg-clip-text text-transparent">One Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each instrument aboard Terra provides a unique perspective on Earth's complex systems,
            working together to create a comprehensive picture of our changing planet.
          </p>
        </div>

        <div className="space-y-8">
          <InstrumentCard
            name="MODIS"
            fullName="Moderate Resolution Imaging Spectroradiometer"
            description="Terra's most iconic instrument captures Earth in 36 spectral bands, from visible to thermal infrared. MODIS creates daily global imagery, monitoring vegetation, ocean color, fires, and atmospheric conditions with unprecedented detail."
            icon={<Eye className="w-12 h-12" />}
            color="aurora"
            features={[
              "36 spectral bands covering visible to thermal infrared",
              "Complete Earth coverage every 1-2 days",
              "2,330 km swath width capturing broad perspectives",
              "Real-time fire and smoke detection",
            ]}
            discoveries={[
              "Created the iconic 'Blue Marble' Earth imagery series",
              "Tracks Arctic sea ice decline with season-to-season precision",
              "Monitors global vegetation health and deforestation patterns",
              "Detected 2018 Bering Sea meteor trail from space",
            ]}
            delay={0.1}
          />

          <InstrumentCard
            name="ASTER"
            fullName="Advanced Spaceborne Thermal Emission and Reflection Radiometer"
            description="The zoom lens of Terra, ASTER provides high-resolution 3D mapping of Earth's surface. Using stereoscopic imaging, it creates detailed elevation models and thermal maps of land and volcanic regions."
            icon={<Mountain className="w-12 h-12" />}
            color="solar"
            features={[
              "15-meter resolution for detailed surface imaging",
              "Stereoscopic 3D terrain mapping capability",
              "14 spectral bands including thermal infrared",
              "Digital elevation model generation",
            ]}
            discoveries={[
              "Mapped volcanic activity and lava flows worldwide",
              "Documented glacier retreat in mountain ranges",
              "Captured before/after imagery of major disasters",
              "Created detailed urban heat island studies",
            ]}
            delay={0.2}
          />

          <InstrumentCard
            name="CERES"
            fullName="Clouds and Earth's Radiant Energy System"
            description="CERES measures the delicate balance of incoming solar radiation and outgoing heat from Earth. This data is crucial for understanding climate change and Earth's energy budget."
            icon={<Sun className="w-12 h-12" />}
            color="solar"
            features={[
              "Measures Earth's radiation budget components",
              "Tracks cloud radiative effects globally",
              "Monitors solar and thermal radiation flows",
              "Provides climate model validation data",
            ]}
            discoveries={[
              "Quantified 25-year trends in Earth's energy balance",
              "Revealed cloud feedback mechanisms in climate",
              "Measured changes in Arctic albedo effects",
              "Tracked atmospheric aerosol impacts on radiation",
            ]}
            delay={0.3}
          />

          <InstrumentCard
            name="MISR"
            fullName="Multi-angle Imaging SpectroRadiometer"
            description="With nine cameras viewing Earth from different angles, MISR builds 3D models of clouds, aerosols, and surface features. This multi-perspective approach reveals atmospheric structure invisible to single-view instruments."
            icon={<Camera className="w-12 h-12" />}
            color="ocean"
            features={[
              "Nine cameras at angles from -70° to +70°",
              "Four spectral bands per camera (36 total images)",
              "3D atmospheric structure reconstruction",
              "Particle height and type classification",
            ]}
            discoveries={[
              "Tracked pollution reduction over major cities",
              "Analyzed wildfire smoke plume evolution",
              "Measured aerosol optical properties in 3D",
              "Even captured stunning images of the Moon",
            ]}
            delay={0.4}
          />

          <InstrumentCard
            name="MOPITT"
            fullName="Measurements Of Pollution In The Troposphere"
            description="MOPITT monitors carbon monoxide and methane in Earth's lower atmosphere, tracking pollution transport and combustion processes. After 23 years of service, MOPITT was retired in 2023, leaving behind an invaluable two-decade climate record."
            icon={<Wind className="w-12 h-12" />}
            color="ocean"
            features={[
              "Global CO and methane measurements",
              "Vertical atmospheric profile capability",
              "Pollution source and transport tracking",
              "Long-term climate trend documentation",
            ]}
            discoveries={[
              "Documented 20-year decline in global CO levels",
              "Tracked intercontinental pollution transport",
              "Monitored biomass burning emissions worldwide",
              "Created comprehensive tropospheric chemistry archive",
            ]}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
