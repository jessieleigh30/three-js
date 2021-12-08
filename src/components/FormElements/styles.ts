import { fontClamp, letterSpacing, remCalc } from '@lib/helperMethods';
import styled, { css } from 'styled-components';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const Label = styled.label<InputProps>`
  transform-origin: left;
  transition: all 250ms ease;
  z-index: 0;
  position: relative;
  cursor: text;
  pointer-events: none;
  & h4 {
    color: ${(props) =>
      props.hasFocus
        ? props.theme.COLORS.BLACK_006
        : props.theme.COLORS.FONT_COLOR};
    line-height: 1.32;
    transition: all 250ms ease;
    ${letterSpacing(-1, -2)}
  }

  ${(props) =>
    props.hasFocus &&
    css`
      font-size: ${fontClamp(15, 23)};

      & h4 {
        font-size: ${fontClamp(15, 23)};
        ${letterSpacing(-0.5, -1.25)}
      }
    `}
`;

export const FieldGroup = styled.div<InputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: text;

  border-bottom: 2px solid
    ${(props) =>
      props.hasError
        ? props.theme.COLORS.INVALID_FORM_COLOR
        : props.hasFocus
        ? props.theme.COLORS.PRIMARY_004
        : props.theme.COLORS.BLACK_006};

  &:focus {
    border-bottom-color: ${(props) => props.theme.COLORS.PRIMARY_004};
  }

  // Input
  & input,
  textarea {
    font-size: ${fontClamp(21, 40)};
    background: transparent;
    padding-bottom: ${remCalc(15)};
    height: 0;
    width: 100%;
    z-index: 1;
    border: none;
    transition: all 250ms ease;
    resize: none;
    line-height: 1;

    &:focus {
      outline: none;
    }

    &:focus,
    &:not(:placeholder-shown) {
      padding-top: ${remCalc(15)};
      height: auto;
    }

    &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
      font-size: ${fontClamp(15, 23)};

      & h4 {
        font-size: ${fontClamp(15, 23)};
        color: ${(props) => props.theme.COLORS.BLACK_006};
        ${letterSpacing(-0.5, -1.25)}
      }
    }

    ${(props) => props.theme.breakpoints.TABLET} {
      padding-bottom: ${remCalc(20)};
      &:focus,
      &:not(:placeholder-shown) {
        padding-top: ${remCalc(20)};
      }
    }
  }
`;

export const ReverseContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;
