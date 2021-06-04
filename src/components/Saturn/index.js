import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Saturn = ({ position }) => {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, 'models/saturn/Saturn.gltf');
  const texture = useLoader(
    THREE.TextureLoader,
    '/models/saturn/textures/SaturnSurface_Color.png'
  );

  useFrame(() => {
    // group.current.rotation.z += Math.PI / 2.75;
    // group.current.rotation.x = Math.PI / -1.5;
    // group.current.rotation.y += -2;
    // group.current.rotation.y += 0.01;
  });
  return (
    <group
      ref={group}
      position={[20, position, 0]}
      scale={[0.25, 0.25, 0.25]}
      rotation={[0, 0, 0.5]}
    >
      <mesh visible geometry={nodes.Sphere.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere1.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere2.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Sphere3.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Tube.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
      <mesh visible geometry={nodes.Tube1.geometry}>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
};

export default Saturn;
