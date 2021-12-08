import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';
import { Arrow as ArrowComponent } from '../../Arrow';

export const Arrow = styled(ArrowComponent)(
  (props) => props.theme.spacing({ margin: 'left-xs' }),
  `  
    & svg {
      padding-top: ${remCalc(6)};
    }
  `
);

interface ButtonProps {
  isValid: boolean;
}

export const ButtonContainer = styled.div<ButtonProps>`
  ${(props) => props.theme.spacing({ padding: 'top-md' })};
  display: inline-flex;
  & svg {
    fill: ${(props) =>
      props.isValid
        ? props.theme.COLORS.PRIMARY_002
        : props.theme.COLORS.BLACK_006};
  }
  h3 {
    color: ${(props) =>
      props.isValid
        ? props.theme.COLORS.PRIMARY_002
        : props.theme.COLORS.BLACK_006};
  }
  &:hover {
    margin-right: ${remCalc(40)};
    & svg {
      fill: ${(props) =>
        props.isValid
          ? props.theme.COLORS.PRIMARY_002
          : props.theme.COLORS.BLACK_006};
    }
    & ${Arrow} {
      transform: translateX(${(props) => props.isValid && remCalc(10)});
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: baseline;
  background-color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  border: none;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
  padding: 0;
  & h4 {
    color: ${(props) =>
      props.isValid
        ? props.theme.COLORS.PRIMARY_002
        : props.theme.COLORS.BLACK_006};
  }

  &:focus {
    outline: thin dotted;
    padding-right: ${remCalc(25)};
  }

  & svg {
    height: ${remCalc(25)};

    ${(props) => props.theme.breakpoints.TABLET} {
      height: ${remCalc(30)};
    }
  }
`;
