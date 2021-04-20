import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Crane from '@components/Crane';

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
    <div className="h-half">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Loading />}>
          <Crane />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ArcadeScene;
