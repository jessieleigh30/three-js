import React from 'react';
import Saturn from '@components/3d/Saturn';

// function Loading() {
//   return (
//     <mesh rotation={[0, 0, 0]}>
//       <boxGeometry attach="geometry" args={[1, 16, 16]} />
//       <meshStandardMaterial
//         attach="material"
//         color="white"
//         transparent
//         opacity={0.6}
//         roughness={1}
//         metalness={0}
//       />
//     </mesh>
//   );
// }

const SaturnScene = () => {
  return (
    <>
      <Saturn />
    </>
  );
};

export default SaturnScene;
