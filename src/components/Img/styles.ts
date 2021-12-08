import styled from 'styled-components';
import { breakpoints } from '@identity/breakpoints';

const { SM_DESKTOP } = breakpoints;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  img {
    transition: 600ms;
  }

  .mobile {
    display: block !important;

    ${SM_DESKTOP} {
      display: none !important;
    }
  }

  .desktop {
    display: none !important;

    ${SM_DESKTOP} {
      display: block !important;
    }
  }
`;
