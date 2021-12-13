import React from 'react';
import Script from 'next/script';
import ClickToLoad from '@components/ClickToLoad';
import { CodepenContainer } from './styles';
import { SandboxProps } from '@identity/types';

const CodepenEmbed = ({
  user,
  slug,
  title,
  description,
  placeholder,
}: SandboxProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <ClickToLoad
        height={500}
        img={placeholder ? `/images/placeholders/${placeholder}` : ''}
      >
        <>
          <CodepenContainer
            className="codepen"
            data-height="500"
            data-theme-id="light"
            data-default-tab="js,result"
            data-user={user}
            data-slug-hash={slug}
            data-pen-title={title}
          />
          <Script
            async
            src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          />
        </>
      </ClickToLoad>
    </>
  );
};

export default CodepenEmbed;
