import Link from 'next/link';
import React from 'react';

const Examples = () => {
  return (
    <ul>
      <li>
        <Link href="/examples/webgl">Webgl</Link>
      </li>
      <li>
        <Link href="/examples/d3">D3</Link>
      </li>
      <li>
        <Link href="/examples/framer-motion">Framer Motion</Link>
      </li>
      <li>
        <Link href="/examples/react-hooks">React Hooks</Link>
      </li>
    </ul>
  );
};

export default Examples;
