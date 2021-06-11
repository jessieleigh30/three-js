import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Asteroid = ({ position }) => {
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
