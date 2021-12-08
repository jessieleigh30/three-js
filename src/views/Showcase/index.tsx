import React from 'react';
import Link from 'next/link';
import { CaseStudyPageProps } from '@identity/types';
import Card from '@components/Card';
import { CardGrid } from '@views/Showcase/styles';

const Showcase = ({ caseStudies }: CaseStudyPageProps) => {
  return (
    <>
      <h1>Showcase</h1>
      <p>
        At underbelly we dedicate a lot of time to growing our team&apos;s
        skills. This page is dedicated to showcasing the projects we build
        internally
      </p>
      <CardGrid>
        {caseStudies.map((cs) => (
          <Link href={`/${cs.title}`} key={cs.title} passHref>
            <a>
              <Card
                title={cs.title}
                description={cs.description}
                technologies={cs.technologies}
                hosted={cs.hosted}
                cms={cs.cms}
              />
            </a>
          </Link>
        ))}
      </CardGrid>
    </>
  );
};

export default Showcase;
