import React from 'react';

import { theme } from '../tailwind.config';

import { Heading, Typography, Colors, Spacing } from '@components/Theme';

const ExampleView = () => (
  <main className="py-md">
    <section className="container mb-md">
      <Heading>Typography</Heading>

      <Typography style="Default Type" />
      <Typography style="Semi-Bold Type" className="font-semibold" />
      <Typography style="Thin Type" className="font-light" />
    </section>

    <section className="container mb-md">
      <Heading>Colors</Heading>
      <Colors colors={theme.colors} />
    </section>

    <section className="container mb-md">
      <Heading>Spacing Scale</Heading>

      <div className="grid grid-cols-2">
        <Spacing spacing={theme.extend.spacing} style="Core" />
        <Spacing spacing={theme.spacing} style="Full" />
      </div>
    </section>
  </main>
);

export default ExampleView;
