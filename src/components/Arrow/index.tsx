import React from 'react';
import Icons from '@components/Icons';
import { Container, sizes } from './styles';

export interface Props {
  size?: keyof typeof sizes;
}

export const Arrow = (props: Props) => {
  return (
    <Container {...props}>
      <Icons icon="arrow" />
    </Container>
  );
};
