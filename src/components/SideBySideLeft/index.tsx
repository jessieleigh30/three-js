import React from 'react';
import SphereScene from '@components/SphereScene';

export const SideBySide = () => {
  return (
    <section className="m-md">
      <div className="grid grid-cols-2 h-half">
        <div>
          <SphereScene />
        </div>
        <div>
          <h2>Three JS</h2>
          <h3>Animation</h3>
        </div>
      </div>
    </section>
  );
};

export default SideBySide;
