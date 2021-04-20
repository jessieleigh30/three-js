import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Crane = () => {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, 'models/crane/scene.gltf');
  const texture = useLoader(
    THREE.TextureLoader,
    '/models/crane/textures/PapelOrigami_baseColor.jpeg'
  );
  useFrame(() => {
    group.current.rotation.x = 5.09;
    group.current.rotation.y = -2;
  });
  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh visible geometry={nodes.mesh_1.geometry}>
        <meshStandardMaterial attach="material" color="white" map={texture} />
      </mesh>
    </group>
  );
};

export default Crane;
