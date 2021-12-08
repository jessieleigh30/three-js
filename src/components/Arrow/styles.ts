import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';
import { Props } from './index';

export const sizes = {
  small: 7,
  regular: 10,
  large: 20,
};

export const Container = styled.span<Props>`
  display: inline-block;
  position: relative;
  transition: transform 250ms ease-out;
  width: ${({ size = 'small' }) => remCalc(sizes[size])};
  height: ${({ size = 'small' }) => remCalc(sizes[size])};

  & svg {
    transition: fill 250ms ease-out;
    max-width: 100%;
    max-height: 100%;
  }
`;
