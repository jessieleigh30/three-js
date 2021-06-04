import * as THREE from 'three/src/Three';
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import Saturn from '@components/Saturn';

function Loading() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[1, 16, 16]} />
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

const SaturnScene = () => {
  return (
    <>
      <Saturn />
    </>
  );
};

export default SaturnScene;
