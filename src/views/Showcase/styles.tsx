import styled from 'styled-components';
import { breakpoints } from '@identity/breakpoints';

const { TABLET, DESKTOP } = breakpoints;

export const CardGrid = styled.div`
  --col-num: 1;
  display: grid;
  grid-template-columns: repeat(var(--col-num), 1fr);
  grid-gap: 12px;

  ${TABLET} {
    --col-num: 2;
    grid-gap: 24px;
  }

  ${DESKTOP} {
    --col-num: 3;
  }

  a {
    text-decoration: none;
  }
`;
