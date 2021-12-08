import React from 'react';
import { CaseStudyProps } from '@identity/types';
import LogoImage from '@components/Img/logo';

import {
  CardContainer,
  CMSSection,
  HostSection,
  OtherLinks,
  TechGrid,
} from './styles';

const Card = ({
  title,
  description,
  technologies,
  hosted,
  cms,
  otherLinks,
}: CaseStudyProps) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      {technologies && <h4>Tech Stack</h4>}
      <TechGrid>
        {technologies?.map((tech) => (
          <LogoImage name={tech} key={tech} />
        ))}
      </TechGrid>
      {hosted && <h4>Hosted On</h4>}
      <HostSection>
        {hosted?.map((host) => (
          <LogoImage name={host} key={host} />
        ))}
      </HostSection>
      {cms && <h4>Content Management Systems</h4>}
      <CMSSection>
        {cms?.map((c) => (
          <LogoImage name={c} key={c} />
        ))}
      </CMSSection>
      {otherLinks && <h4>Related Links</h4>}
      <OtherLinks>
        {otherLinks?.map(({ title, url }) => (
          <a href={url} target="_blank" key={title} rel="noreferrer">
            {title}
          </a>
        ))}
      </OtherLinks>
    </CardContainer>
  );
};

export default Card;
