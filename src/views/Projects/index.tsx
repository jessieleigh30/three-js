import React from 'react';
import Link from 'next/link';

const ProjectsView = () => {
  return (
    <>
      <Link href="/examples">Examples</Link>
      <br />
      <Link href="/showcase">Showcase</Link>
    </>
  );
};

export default ProjectsView;
