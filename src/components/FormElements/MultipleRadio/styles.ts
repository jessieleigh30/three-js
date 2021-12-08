import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const FieldGroup = styled.div<InputProps>`
  display: inline-block;
`;

export const Label = styled.label<InputProps>`
  width: 100%;
  z-index: 0;
  color: ${(props) =>
    props.hasFocus
      ? props.theme.COLORS.FONT_COLOR
      : props.theme.COLORS.FONT_COLOR_MUTED};
`;

export const Input = styled.input<InputProps>`
  opacity: 0;
  cursor: pointer;

  ~ label p {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      background: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
      border-radius: 100%;
      border: 1px solid ${(props) => props.theme.COLORS.BLACK_003};
      display: inline-block;
      width: ${remCalc(17)};
      height: ${remCalc(17)};
      position: relative;
      text-align: center;
      transition: all 250ms ease;
      align-items: center;
      margin-right: 10px;
    }
  }
  &:checked ~ label p:before {
    background-color: ${(props) => props.theme.COLORS.PRIMARY_002};
    box-shadow: inset 0 0 0 3px ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  }
  &:focus ~ label p:before {
    outline: thin dotted;
    border-color: ${(props) => props.theme.COLORS.PRIMARY_002};
  }
  ~ label p:empty:before {
    margin-right: 0;
  }
  font-size: ${remCalc(20)};
  z-index: 1;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) =>
      props.hasError
        ? (props) => props.theme.COLORS.INVALID_FORM_COLOR
        : (props) => props.theme.COLORS.FONT_COLOR_MUTED};
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  width: 255px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: ${remCalc(10)};
`;

export const Small = styled.p`
  padding-top: ${remCalc(20)};
  font-size: 15px;
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;
