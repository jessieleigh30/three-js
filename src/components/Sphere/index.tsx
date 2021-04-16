import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = (props) => {
  const circleMesh = useRef();
  useFrame(() => {
    circleMesh.current.rotation.x += 0.01;
    circleMesh.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={circleMesh}>
      <sphereGeometry attach="geometry" args={[0.5, 10, 10]} />
      <meshStandardMaterial attach="material" color="pink" wireframe />
    </mesh>
  );
};

export default Sphere;
