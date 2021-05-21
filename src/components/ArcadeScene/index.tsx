import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Pacman from '@components/Pacman';

function Loading() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

const ArcadeScene = () => {
  return (
    <div className="h-full">
      <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <ambientLight />
        <Suspense fallback={<Loading />}>
          <Pacman />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ArcadeScene;
