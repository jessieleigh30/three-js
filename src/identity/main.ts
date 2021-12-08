import styled from 'styled-components';

const Main = styled.main`
  background: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  flex: 1;
  position: relative;
  z-index: 100;
  max-width: 100vw;

  & h4:first-of-type {
    padding-top: 0;
  }
`;

export default Main;
