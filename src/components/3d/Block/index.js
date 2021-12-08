import * as THREE from 'three';
import React, { createContext, useRef, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import state from '@components/3d/State';
import { useInView } from 'react-intersection-observer';
import { Html } from '@react-three/drei';

const offsetContext = createContext(0);

function Block({ children, offset, factor, bgColor, title, ...props }) {
  const { offset: parentOffset, sectionHeight, aspect } = useBlock();
  const ref = useRef();
  offset = offset !== undefined ? offset : parentOffset;
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current / aspect;
    ref.current.position.y = THREE.MathUtils.lerp(
      curY,
      (curTop / state.zoom) * factor,
      0.1
    );
  });
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  React.useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>
          <Html>
            <span ref={refItem}>
              <h1>{title}</h1>
            </span>
          </Html>
          {children}
        </group>
      </group>
    </offsetContext.Provider>
  );
}

function useBlock() {
  const { sections, pages, zoom } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const aspect = size.height / viewportHeight;
  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  };
}

export { Block, useBlock };
