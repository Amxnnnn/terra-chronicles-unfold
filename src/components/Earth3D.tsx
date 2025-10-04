import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0066cc"
          roughness={0.7}
          metalness={0.3}
          emissive="#001a33"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.6, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#00d9a0"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  );
}

export default function Earth3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d9a0" />
        <Stars radius={300} depth={60} count={3000} factor={7} saturation={0} fade speed={1} />
        <EarthSphere />
      </Canvas>
    </div>
  );
}
