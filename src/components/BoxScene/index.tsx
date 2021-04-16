import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '@components/Box';

const BoxScene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default BoxScene;