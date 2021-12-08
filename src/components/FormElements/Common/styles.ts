import { remCalc } from '@lib/helperMethods';
import { css } from 'styled-components';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const InputDefaults = css<InputProps>`
  background: transparent;
  font-size: ${remCalc(40)};
  padding-bottom: ${remCalc(20)};
  width: 100%;
  z-index: 1;
  border: none;
  border-bottom: 2px solid
    ${(props) =>
      props.hasError
        ? props.theme.COLORS.INVALID_FORM_COLOR
        : props.hasFocus
        ? props.theme.COLORS.PRIMARY_004
        : props.theme.COLORS.BLACK_006};
  &:focus {
    outline: none;
  }
`;
