import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
  const mesh = useRef();

  useFrame(() => {
    // mesh.current.rotation.x += 0.01;
    // mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 3, 1]} attach="geometry" />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
};

export default Box;
