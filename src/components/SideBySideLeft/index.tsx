import React from 'react';
import SphereScene from '@components/SphereScene';

export const SideBySide = () => {
  return (
    <section className="m-md">
      <div className="grid grid-cols-2 h-half">
        <div>
          <SphereScene />
        </div>
        <h1>Three JS Component</h1>
      </div>
    </section>
  );
};

export default SideBySide;
