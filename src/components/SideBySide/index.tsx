import React from 'react';
import BoxScene from '@components/BoxScene';

export const SideBySide = () => {
  return (
    <section className="m-md">
      <div className="grid grid-cols-2 h-half">
        <h1>Three JS Component</h1>
        <div>
          <BoxScene />
        </div>
      </div>
    </section>
  );
};

export default SideBySide;
