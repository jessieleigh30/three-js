import React from 'react';
import Showcase from '@views/Showcase';
import data from '@public/data.json';

const ShowcasePage = () => {
  const caseStudies = data.find(
    (page) => page.title === 'showcase'
  ).caseStudies;
  return <Showcase caseStudies={caseStudies} />;
};

export default ShowcasePage;
