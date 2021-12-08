import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';
import { Arrow as ArrowComponent } from '../../Arrow';

interface SuccessProps {
  isOpen: boolean;
}

export const SuccessContainer = styled.div<SuccessProps>`
  display: ${(props) => (props.isOpen ? 'grid' : 'none')};
  grid-auto-rows: auto;
  align-content: start;
  height: 100%;
  background: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  z-index: 100;
  ${(props) => props.theme.spacing({ padding: 'horizontal-md bottom-md' })};

  ${(props) => props.theme.breakpoints.TABLET} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-lg bottom-lg' })};
  }

  ${(props) => props.theme.breakpoints.DESKTOP} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-xl bottom-xl' })};
    grid-template-columns: 1fr 1fr;
  }
`;

export const Arrow = styled(ArrowComponent)`
  ${(props) => props.theme.spacing({ margin: 'left-sm' })};
  transition: transform 250ms ease-out;
  bottom: -${remCalc(1.6)};
  & svg {
    fill: ${(props) => props.theme.COLORS.BLACK_006};
  }
`;

export const ButtonContainer = styled.div`
  display: none;
  ${(props) => props.theme.breakpoints.DESKTOP} {
    display: inline-flex;

    & svg {
      fill: ${(props) => props.theme.COLORS.PRIMARY_002};
    }
    & h4 {
      color: ${(props) => props.theme.COLORS.PRIMARY_002};
    }
    & ${Arrow} {
      color: ${(props) => props.theme.COLORS.PRIMARY_002};
    }
    &:hover {
      & svg {
        fill: ${(props) => props.theme.COLORS.PRIMARY_001};
      }
      & h4 {
        color: ${(props) => props.theme.COLORS.PRIMARY_001};
      }
      & ${Arrow} {
        color: ${(props) => props.theme.COLORS.PRIMARY_001};
        transform: translateX(10px);
      }
    }
  }
`;

export const ButtonContainerDesktop = styled.div`
  display: block;
  & svg {
    fill: ${(props) => props.theme.COLORS.PRIMARY_002};
  }
  & h4 {
    color: ${(props) => props.theme.COLORS.PRIMARY_002};
  }
  & ${Arrow} {
    color: ${(props) => props.theme.COLORS.PRIMARY_002};
  }
  &:hover {
    & svg {
      fill: ${(props) => props.theme.COLORS.PRIMARY_001};
    }
    & h4 {
      color: ${(props) => props.theme.COLORS.PRIMARY_001};
    }
    & ${Arrow} {
      color: ${(props) => props.theme.COLORS.PRIMARY_001};
      transform: translateX(20px);
    }
  }
  ${(props) => props.theme.breakpoints.DESKTOP} {
    display: none;
  }
`;

interface ButtonProps {
  formInvalid?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0;
  display: flex;
  align-items: baseline;
  background-color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  border: none;
  cursor: ${(props) => (props.formInvalid ? 'not-allowed' : 'pointer')};
  margin-right: 10px;
  &:focus {
    outline: thin dotted;
    padding-right: ${remCalc(25)};
    color: ${(props) => props.theme.COLORS.PRIMARY_004};
  }

  & span {
    margin-left: ${remCalc(10)};
  }

  & svg {
    position: relative;
    top: ${remCalc(-2)};
    height: ${remCalc(15)};
    width: ${remCalc(8)};

    ${(props) => props.theme.breakpoints.TABLET} {
      height: ${remCalc(22)};
      width: ${remCalc(12)};
    }
  }
`;

export const Message = styled.div`
  ${(props) => props.theme.spacing({ padding: 'vertical-sm' })};
  ${(props) => props.theme.breakpoints.DESKTOP} {
    ${(props) => props.theme.spacing({ padding: 'top-sm bottom-lg' })};
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  ${(props) => props.theme.breakpoints.DESKTOP} {
    ${(props) => props.theme.spacing({ padding: 'top-md' })}

    & ${Message} {
      display: block !important;
    }
  }

  & ${Message} {
    display: none;
  }
`;

export const Submitted = styled.div`
  ${(props) => props.theme.spacing({ padding: 'right-xs' })};
  display: flex;
`;

export const DelighterWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  padding: ${remCalc(10)} 0 0 ${remCalc(10)};

  ${(props) => props.theme.breakpoints.TABLET} {
    padding: ${remCalc(12)} 0 0 ${remCalc(12)};
  }

  & svg {
    position: relative;
    top: ${remCalc(4)};
    width: ${remCalc(16)};
    height: ${remCalc(12)};

    ${(props) => props.theme.breakpoints.TABLET} {
      width: ${remCalc(22)};
      height: ${remCalc(16.5)};
    }
  }
`;
