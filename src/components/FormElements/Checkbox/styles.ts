import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const FieldGroup = styled.div<InputProps>`
  position: relative;
`;

export const Label = styled.label<InputProps>`
  width: 100%;
  z-index: 0;
  color: ${(props) =>
    props.hasFocus
      ? props.theme.COLORS.FONT_COLOR
      : props.theme.COLORS.FONT_COLOR_MUTED}};
`;

export const CheckboxButton = styled.span`
  padding: ${remCalc(10)} ${remCalc(40)};
  display: block;
  border: 1px solid ${(props) => props.theme.COLORS.BLACK_006};
  border-radius: ${remCalc(40)};
  margin: -1px;
  cursor: pointer;
  transition: all 350ms ${(props) => props.theme.EASE};

  &:hover {
    background-color: ${(props) => props.theme.COLORS.PRIMARY_002};
    border-color: ${(props) => props.theme.COLORS.PRIMARY_002};

    & p {
      color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
    }
  }

  & p {
    transition: all 350ms ${(props) => props.theme.EASE};
  }
`;

export const CheckboxLabel = styled.label``;
export const Input = styled.input<InputProps>`
  font-size: ${remCalc(20)};
  position: absolute;
  opacity: 0;
  z-index: 1;
  border: none;
  cursor: pointer;

  &:checked ~ ${CheckboxLabel} ${CheckboxButton} {
    background-color: ${(props) => props.theme.COLORS.PRIMARY_002};
    border-color: ${(props) => props.theme.COLORS.PRIMARY_002};
    box-shadow: none;

    & p {
      color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
    }
  }

  &:focus ~ ${CheckboxLabel} ${CheckboxButton} {
    outline: thin dotted ${(props) => props.theme.COLORS.LINK_COLOR_HOVER};
  }
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  & > div {
    margin-top: ${remCalc(18)};
    ${(props) => props.theme.breakpoints.TABLET}{
      margin-right ${remCalc(30)};
    }
  }
  
  & > div:last-of-type {
    margin-right: 0;
  }
  
  ${(props) => props.theme.breakpoints.PHONE}{
    ${(props) => props.theme.spacing({ margin: 'top-md bottom-none' })}
  }
`;

export const CheckboxContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;

  ${(props) => props.theme.breakpoints.TABLET} {
    width: auto;
  }
`;

export const Small = styled.p`
  position: absolute;
  bottom: ${remCalc(-25)};
  font-size: ${remCalc(15)};
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;
