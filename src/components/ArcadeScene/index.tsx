import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

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

function Crane() {
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
}

const ArcadeScene = () => {
  return (
    <div className="h-half">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight />
        <Suspense fallback={<Loading />}>
          <Crane />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ArcadeScene;
