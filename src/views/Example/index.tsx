import React from 'react';
import { ExampleProps } from '@identity/types';
import SandboxEmbed from '@components/SandboxEmbed';
import CodepenEmbed from '@components/CodepenEmbed';
import { createDynamicInput } from '@lib/dynamicComponents';
import { ExampleContainer } from './styles';

const dynamicComponents = {
  codesandbox: (props: any) => <SandboxEmbed {...props} />,
  codepen: (props: any) => <CodepenEmbed {...props} />,
};

const DynamicContent = createDynamicInput(dynamicComponents);

const Example = ({ name, description, sandboxes }: ExampleProps) => {
  return (
    <ExampleContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        {sandboxes.map((sandbox, i) => (
          <DynamicContent {...sandbox} key={i} />
        ))}
      </div>
    </ExampleContainer>
  );
};

export default Example;
