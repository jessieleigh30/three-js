import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Asteroid = () => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, 'models/asteroid2/Asteroid.gltf');

  // console.log(nodes, 'Here');

  useFrame(() => {
    // group.current.rotation.y += 0.01;
  });
  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, -200]}
      scale={[0.25, 0.25, 0.25]}
      ref={group}
    />
  );
};

export default Asteroid;
