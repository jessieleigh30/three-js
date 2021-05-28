import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Pacman = () => {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, 'models/pacman/scene.gltf');
  const texture = useLoader(
    THREE.TextureLoader,
    '/models/pacman/textures/automat_baseColor.jpeg'
  );
  useFrame(() => {
    group.current.rotation.z = 0.25;
    group.current.rotation.x = Math.PI / -2;
  });
  return (
    console.log(nodes, 'nodes'),
    (
      <group ref={group} position={[5, -10, -100]}>
        <mesh visible geometry={nodes.pac_man_machine_automat_0.geometry}>
          <meshStandardMaterial attach="material" color="white" map={texture} />
        </mesh>
        <mesh visible geometry={nodes.ghost1.geometry}>
          <meshStandardMaterial attach="material" color="white" />
        </mesh>
        <mesh visible geometry={nodes.mesh_2.geometry}>
          <meshStandardMaterial attach="material" color="black" map={texture} />
        </mesh>
      </group>
    )
  );
};

export default Pacman;
