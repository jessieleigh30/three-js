import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sphere from '@components/Sphere';

const SphereScene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <Sphere position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default SphereScene;
