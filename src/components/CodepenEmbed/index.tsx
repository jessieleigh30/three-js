import React from 'react';
import Script from 'next/script';
import { CodepenContainer } from './styles';

const CodepenEmbed = ({ user, slug, title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <CodepenContainer
        className="codepen"
        data-height="500"
        data-theme-id="light"
        data-default-tab="js,result"
        data-user={user}
        data-slug-hash={slug}
        data-pen-title={title}
      />
      <Script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </>
  );
};

export default CodepenEmbed;
