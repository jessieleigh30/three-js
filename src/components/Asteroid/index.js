import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Asteroid = ({ position }) => {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, 'models/asteroid/Asteroid.gltf');
  const texture = useLoader(
    THREE.TextureLoader,
    '/models/saturn/textures/SaturnSurface_Color.png'
  );
  console.log(nodes, 'Here');

  useFrame(() => {
    // group.current.rotation.z += Math.PI / 2.75;
    // group.current.rotation.x = Math.PI / -1.5;
    // group.current.rotation.y += -2;
    // group.current.rotation.y += 0.01;
  });
  return (
    <group
      ref={group}
      position={[20, position, -120]}
      scale={[0.25, 0.25, 0.25]}
      rotation={[0, 0, 0.5]}
    >
      <mesh visible geometry={nodes.Asteroids1.geometry}>
        <meshStandardMaterial attach="material" color="pink" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere_0.geometry}>
        <meshStandardMaterial attach="material" color="pink" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere_1.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere_2.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere_20_1.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
};

export default Asteroid;
