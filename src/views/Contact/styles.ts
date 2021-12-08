import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';
import { Arrow as ArrowComponent } from '@components/Arrow';

export const ContactWrapper = styled.div`
  ${(props) => props.theme.spacing({ padding: 'horizontal-md bottom-md' })};
  ${(props) => props.theme.breakpoints.TABLET} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-lg bottom-lg' })};
  }

  ${(props) => props.theme.breakpoints.DESKTOP} {
    ${(props) => props.theme.spacing({ padding: 'horizontal-xl bottom-xl' })};
  }
`;

export const Arrow = styled(ArrowComponent)`
  display: none;

  ${(props) => props.theme.breakpoints.TABLET} {
    display: inline-block;
  }

  & svg {
    fill: ${(props) => props.theme.COLORS.FONT_COLOR};
  }
`;

export const FormLink = styled.div`
  ${(props) => props.theme.spacing({ padding: 'vertical-sm' })};
  &:first-child {
    padding-top: 0;
  }
  display: grid;
  grid-column-gap: ${remCalc(30)};
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
`;

export const QuestionWrapper = styled.div`
  ${(props) => props.theme.spacing({ padding: 'top-lg' })};
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: ${remCalc(800)};
`;

export const Anchor = styled.a`
  cursor: pointer;
  &:hover {
    & h4 {
      color: ${(props) => props.theme.COLORS.PRIMARY_001};
    }
    & svg {
      fill: ${(props) => props.theme.COLORS.PRIMARY_001};
    }
    & ${Arrow} {
      transform: translateX(10px);
    }
  }

  & ${Arrow} svg {
    ${(props) => props.theme.spacing({ margin: 'left-sm' })}
    height: ${remCalc(15)};

    ${(props) => props.theme.breakpoints.TABLET} {
      height: ${remCalc(25)};
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 100%;
  margin-bottom: ${remCalc(60)};
  position: relative;
`;

interface RowProps {
  hide?: boolean;
}

export const RowWrapper = styled.div<RowProps>`
  margin-top: ${remCalc(36)};
  margin-bottom: ${remCalc(36)};
  display: ${(props) => (props.hide ? 'none' : 'block')};
  position: relative;

  ${(props) => props.theme.breakpoints.TABLET} {
    margin-top: ${remCalc(80)};
    margin-bottom: ${remCalc(80)};
  }
`;
