import * as THREE from 'three/src/Three';
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Saturn from '@components/Saturn';
import { useHelper } from '@react-three/drei';

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

const Stars = () => {
  const group = useRef();
  const mesh = useRef();
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.OctahedronGeometry();
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('lightblue'),
    });
    const coords = new Array(2000)
      .fill()
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);
  useFrame(() => {
    //change to mesh to try and get the individual stars to move
    mesh.current.rotation.y += 0.001;
  });
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh
          key={i}
          geometry={geo}
          material={mat}
          position={[p1, p2, p3]}
          ref={mesh}
        />
      ))}
    </group>
  );
};
const SaturnScene = () => {
  return (
    <div className="h-full">
      <Canvas camera={{ fov: 75, position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} color="white" />
        <Suspense fallback={<Loading />}>
          <Saturn />
          <Stars />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default SaturnScene;
