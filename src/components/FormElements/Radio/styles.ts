import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const FieldGroup = styled.div<InputProps>`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  justify-content: space-between;
  grid-row-gap: ${remCalc(40)};
`;

export const Label = styled.label<InputProps>`
  width: 100%;
  z-index: 0;
  color: ${(props) =>
    props.hasFocus
      ? props.theme.COLORS.FONT_COLOR
      : props.theme.COLORS.FONT_COLOR_MUTED}};
`;

export const Input = styled.input<InputProps>`
  font-size: ${remCalc(20)};
  z-index: 1;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) =>
      props.hasError
        ? (props) => props.theme.COLORS.INVALID_FORM_COLOR
        : props.hasFocus
        ? (props) => props.theme.COLORS.FONT_COLOR
        : (props) => props.theme.COLORS.FONT_COLOR_MUTED};
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  margin-right: ${remCalc(65)};

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    + h4 {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:before {
        content: '';
        background: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
        border-radius: 100%;
        border: 1px solid ${(props) => props.theme.COLORS.BLACK_003};
        display: inline-block;
        width: ${remCalc(20)};
        height: ${remCalc(20)};
        position: relative;
        text-align: center;
        transition: all 250ms ease;
        align-items: center;
        margin-right: ${remCalc(10)};

        ${(props) => props.theme.breakpoints.TABLET} {
          width: ${remCalc(30)};
          height: ${remCalc(30)};
        }
      }
    }
    &:checked + h4:before {
      background-color: ${(props) => props.theme.COLORS.PRIMARY_002};
      box-shadow: inset 0 0 0 3px
        ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
    }
    &:focus + h4:before {
      outline: thin dotted;
      border-color: ${(props) => props.theme.COLORS.PRIMARY_002};
    }
    + h4:empty:before {
      margin-right: 0;
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const Small = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 15px;
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;
