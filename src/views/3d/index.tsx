import React, { Suspense, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three/src/Three';
import Saturn from '@components/3d/Saturn';
import Spaceship from '@components/3d/Spaceship';
import Asteroid from '@components/3d/Asteroid';
import state from '@components/3d/State';
import { Block } from '@components/3d/Block';
import { Canvas, useFrame } from '@react-three/fiber';

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
  const group = useRef<any>();
  const mesh = useRef();
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.OctahedronGeometry();
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('lightblue'),
    });
    const coords = new Array(2000)
      .fill(0)
      .map(() => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);

  useFrame(() => {
    if (group.current)
      //change to mesh to try and get the individual stars to move
      group.current.rotation.x += -0.0008;
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

const WebGLView = () => {
  const scrollArea = useRef();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas camera={{ fov: 75, position: [0, 0, 120] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} color="white" />
        <Suspense fallback={<Loading />}>
          <Stars />
          <Block
            offset={0}
            factor={1}
            bgColor={'linear-gradient(#583fcd, #021945)'}
            title="Saturn"
          >
            <Saturn position={0} />
          </Block>
          <Block
            offset={1}
            factor={1}
            bgColor={'linear-gradient(#B33C22, #021945)'}
            title="Asteroid Belt"
          >
            <Asteroid />
          </Block>
          <Block
            offset={2}
            factor={1}
            bgColor={'linear-gradient(#BADA55,#021945)'}
            title="Rocket Ship"
          >
            <Spaceship position={0} />
          </Block>
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
};

export default WebGLView;
