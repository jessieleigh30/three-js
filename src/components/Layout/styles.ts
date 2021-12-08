import styled from 'styled-components';
import { breakpoints } from '@identity/breakpoints';

const { TABLET, DESKTOP } = breakpoints;

export const LayoutContainer = styled.div`
  padding: 12px;

  ${TABLET} {
    padding: 24px;
  }

  ${DESKTOP} {
    padding: 48px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
