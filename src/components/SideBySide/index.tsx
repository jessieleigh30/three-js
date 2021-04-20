import React from 'react';
import ArcadeScene from '@components/ArcadeScene';

export const SideBySide = () => {
  return (
    <section className="m-md">
      <div className="grid grid-cols-2 h-half">
        <div>
          <h2>Three JS</h2>
          <h3>User Interaction</h3>
        </div>
        <div>
          <ArcadeScene />
        </div>
      </div>
    </section>
  );
};

export default SideBySide;
