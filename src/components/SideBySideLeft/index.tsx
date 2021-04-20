import React from 'react';
import SphereScene from '@components/SphereScene';

export const SideBySide = () => {
  return (
    <section>
      <div className="grid grid-cols-2 h-half">
        <div>
          <SphereScene />
        </div>
        <div>
          <h3>Animation</h3>
        </div>
      </div>
    </section>
  );
};

export default SideBySide;
