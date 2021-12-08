import styled from 'styled-components';

interface ComponentProps {
  space?: any;
}

interface ContainerProps extends ComponentProps {
  dark?: boolean;
  background?: string;
}

interface RowProps extends ComponentProps {
  justify?: string;
}

export const Container = styled.section<ContainerProps>`
  ${({ space, theme }) => space && theme.spacing(space)};
  background: ${(props) =>
    props.dark ? `${props.theme.COLORS.BLACK_001}` : props.background};
  position: relative;
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  p {
    color: ${(props) => props.dark && `${props.theme.COLORS.WHITE_ALPHA_100}`};
  }
`;

export const Row = styled.div<RowProps>`
  ${(props) => props.theme.spacing({ padding: 'horizontal-md' })};
  ${({ space, theme }) => space && theme.spacing(space)};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify || 'space-between'};
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.TABLET} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-lg' })};
  }

  ${(props) => props.theme.breakpoints.DESKTOP} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-xl' })};
  }
`;
