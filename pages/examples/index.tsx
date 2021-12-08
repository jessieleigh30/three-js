import Link from 'next/link';
import React from 'react';

const Examples = () => {
  return (
    <>
      <Link href="/examples/webgl">Webgl</Link>
      <Link href="/examples/d3">D3</Link>
      <Link href="/examples/framer-motion">Framer Motion</Link>
      <Link href="/examples/react-hooks">React Hooks</Link>
    </>
  );
};

export default Examples;
