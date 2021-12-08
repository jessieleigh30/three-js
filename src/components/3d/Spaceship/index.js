import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Spaceship = ({ position, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    'models/spaceship/ship.gltf'
  );
  const Extrude0 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Extrude_0Surface_Color.png'
  );
  const Extrude1 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Extrude_1Surface_Color.png'
  );
  const Extrude2 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Extrude_2Surface_Color.png'
  );
  const Extrude3 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Extrude_3Surface_Color.png'
  );
  const Cylinder = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/CylinderSurface_Color.png'
  );
  const Cylinder1 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Cylinder1Surface_Color.png'
  );
  const Torus = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/TorusSurface_Color.png'
  );
  const Torus1 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Torus1Surface_Color.png'
  );
  const Loft1 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/LoftSurface_Color.png'
  );
  const Tube1 = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/Tube.1Surface_Color.png'
  );
  const Tube = useLoader(
    THREE.TextureLoader,
    '/models/spaceship/textures/TubeSurface_Color.png'
  );

  useFrame(() => {
    // group.current.rotation.z += Math.PI / 2.75;
    // group.current.rotation.x = Math.PI / -1.5;
    // group.current.rotation.x += 0.01;
    // group.current.rotation.y += 0.01;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, -0.45, 0]}
      scale={[0.75, 0.75, 0.75]}
    >
      <group position={[20, -50, -200]}>
        <group position={[0.02, -77.89, 2.51]}>
          <mesh castShadow receiveShadow geometry={nodes.Extrude_0.geometry}>
            <meshStandardMaterial attach="material" map={Extrude0} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_1.geometry}
            rotation={[0, -1.57, 0]}
            ƒ
          >
            <meshStandardMaterial attach="material" map={Extrude1} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_2.geometry}
            material={materials['Extrude 2']}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <meshStandardMaterial attach="material" map={Extrude2} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_3.geometry}
            material={materials['Extrude 3']}
            rotation={[0, 1.57, 0]}
          >
            <meshStandardMaterial attach="material" map={Extrude3} />
          </mesh>
        </group>
        <group
          position={[64.93, 60.58, -0.57]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            position={[0.49, -0.32, -0.12]}
            rotation={[0, 0, -0.08]}
          >
            <meshStandardMaterial attach="material" map={Cylinder} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            position={[-0.49, 0.32, 0.12]}
            rotation={[0, 0, -0.08]}
          >
            <meshStandardMaterial attach="material" map={Torus} />
          </mesh>
        </group>
        <group position={[-64.99, 60.58, -0.57]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            position={[0.49, -0.32, -0.12]}
            rotation={[0, 0, -0.08]}
          >
            <meshStandardMaterial attach="material" map={Cylinder1} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_1.geometry}
            position={[-0.49, 0.32, 0.12]}
            rotation={[0, 0, -0.08]}
          >
            <meshStandardMaterial attach="material" map={Torus1} />
          </mesh>
        </group>
        <group position={[0.02, -105.57, -0.45]}>
          <mesh castShadow receiveShadow geometry={nodes.Loft_1.geometry}>
            <meshStandardMaterial attach="material" map={Loft1} />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube1.geometry}
          material={materials['Tube.1']}
          position={[0.02, 157.34, -0.45]}
        >
          <meshStandardMaterial attach="material" map={Tube1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials.Tube}
          position={[0.02, -95.03, -0.45]}
        >
          <meshStandardMaterial attach="material" map={Tube} />
        </mesh>
      </group>
    </group>
  );
};

export default Spaceship;
