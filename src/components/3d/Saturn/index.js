import React, { useRef } from 'react';
import '@components/3d/ParticleShader';
import { useGLTF } from '@react-three/drei';

const Saturn = (props) => {
  const group = useRef();
  const { nodes } = useGLTF('/models/saturn/Saturn.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -105, 0]}
        rotation={[0, 0, 0.17]}
        scale={[0.25, 0.25, 0.25]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          // material={nodes.Tube.material}
          position={[0, 120, 0]}
        >
          <particleShaderMaterial />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube1.geometry}
          material={nodes.Tube1.material}
          position={[0, 120, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[0, 120, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere1.geometry}
          material={nodes.Sphere1.material}
          position={[-205, 191.64, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={nodes.Sphere2.material}
          position={[-185, 228.61, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere3.geometry}
          material={nodes.Sphere3.material}
          position={[-215.57, 243.61, -25]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/saturn/Saturn.gltf');

export default Saturn;
