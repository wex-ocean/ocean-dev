import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points } from '@react-three/drei';

export default function ParticleField() {
  const pointsRef = useRef<any>(null);
  const particleCount = 500;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Blue gradient colors
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        // Deep blue
        colors[i3] = 0.02;
        colors[i3 + 1] = 0.19;
        colors[i3 + 2] = 0.51;
      } else {
        // Vibrant blue
        colors[i3] = 0.07;
        colors[i3 + 1] = 0.41;
        colors[i3 + 2] = 0.70;
      }
    }

    return [positions, colors];
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    
    // Rotate the particle field
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colors}
      stride={3}
      material={material}
    />
  );
}
