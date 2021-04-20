import React from 'react';

import SideBySide from '@components/SideBySide';
import SideBySideLeft from '@components/SideBySideLeft';

const ExampleView = () => {
  return (
    <>
      <div className="m-lg">
        <h1>Three JS</h1>
        <SideBySide />
        <SideBySideLeft />
      </div>
    </>
  );
};

export default ExampleView;
