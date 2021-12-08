import styled, { css } from 'styled-components';
import { fontClamp, letterSpacing, remCalc } from '@lib/helperMethods';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
  hasSelected?: boolean;
}

export const FieldGroup = styled.div<InputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const Label = styled.label<InputProps>`
  transform-origin: left;
  font-weight: 300;
  transition: all 500ms ease;
  z-index: 0;
  cursor: pointer;
  position: relative;
  pointer-events: none;

  & h4 {
    font-size: ${(props) => (props.hasSelected ? remCalc(15) : undefined)};
    white-space: ${(props) => (props.hasFocus ? 'nowrap' : `normal`)};
    color: ${(props) =>
      props.hasSelected
        ? props.theme.COLORS.BLACK_006
        : props.theme.COLORS.FONT_COLOR};

    ${(props) => props.theme.breakpoints.TABLET} {
      font-size: ${(props) => (props.hasSelected ? remCalc(21) : undefined)};
    }
    ${(props) =>
      props.hasSelected &&
      css`
        ${letterSpacing(-0.5, -1.25)}
      `}
  }
`;

export const Input = styled.button<InputProps>`
  text-align: left;
  cursor: pointer;
  background: transparent;
  display: block;
  padding-left: 0;
  height: ${(props) => (props.hasSelected ? 'auto' : 0)} !important;
  transition: all 500ms ease;
  padding-bottom: ${remCalc(15)};
  line-height: 1.217;
  padding-top: ${(props) => (props.hasSelected ? remCalc(15) : 0)};
  font-size: ${fontClamp(21, 40)};
  ${letterSpacing(-0.8, -1.5)};
  font-weight: 300;
  width: 100%;
  z-index: 1;
  border: none;
  border-bottom: 2px solid
    ${(props) =>
      props.hasError
        ? props.theme.COLORS.INVALID_FORM_COLOR
        : props.theme.COLORS.BLACK_006};

  ${(props) => props.theme.breakpoints.TABLET} {
    padding-bottom: ${remCalc(20)};
    padding-top: ${(props) => (props.hasSelected ? remCalc(20) : 0)};
  }

  &:focus {
    border-bottom-color: ${(props) => props.theme.COLORS.PRIMARY_004};
    outline: none;
  }

  & i {
    position: absolute;
    right: 10px;
    bottom: 0px;

    & svg {
      width: 10px !important;
      transform: rotate(90deg);
      fill: ${(props) => props.theme.COLORS.FONT_COLOR};
    }
  }
`;

export const Small = styled.p`
  position: absolute;
  bottom: ${remCalc(-25)};
  font-size: ${remCalc(15)};
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;

export const InputHidden = styled.input`
  display: none;
`;

interface DropdownProps {
  highlightedIndex: number;
  index: number;
  selectedItem: string;
  item: string;
}

export const DropdownContainer = styled.ul`
  position: absolute;
  background-color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  width: 100%;
  box-shadow: 0px 3px 6px ${(props) => props.theme.COLORS.BOX_SHADOW_001};
  border-radius: 2px;
  z-index: 100;
`;

export const DropdownItem = styled.li<DropdownProps>`
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => props.theme.COLORS.WHITE_ALPHA_100};
  color: ${({ highlightedIndex, index, selectedItem, item, theme }) =>
    selectedItem === item || highlightedIndex === index
      ? theme.COLORS.WHITE_ALPHA_100
      : theme.COLORS.FONT_COLOR};  
  background-color: ${({
    highlightedIndex,
    index,
    selectedItem,
    item,
    theme,
  }) => {
    if (highlightedIndex === index) return theme.COLORS.PRIMARY_003;
    if (selectedItem === item) return theme.COLORS.PRIMARY_002;
    return theme.COLORS.WHITE_ALPHA_100;
  }};
  list-style-type: none;
    padding ${remCalc(10)} ${remCalc(30)};
    font-weight: 300;
  
  font-size: ${fontClamp(21, 30)};
`;

export const DropdownSpacing = styled.div`
  height: 10px;
  width: 100%;
`;

export const MobileDrop = styled.div<InputProps>`
  ${(props) => props.theme.breakpoints.TABLET} {
    visibility: hidden;
    display: none;
  }

  hr {
    border: none;
    height: 1px;
  }
  width: 100%;
  border-bottom: 2px solid
    ${(props) =>
      props.hasError
        ? props.theme.COLORS.INVALID_FORM_COLOR
        : props.hasFocus
        ? props.theme.COLORS.PRIMARY_004
        : props.theme.COLORS.BLACK_006};
`;

export const Arrow = styled.span`
  content: '';
  height: ${remCalc(12)};
  width: ${remCalc(12)};
  border: solid ${(props) => props.theme.COLORS.FONT_COLOR};
  border-width: 0px 0px 2px 2px;
  position: absolute;
  right: ${remCalc(10)};
  bottom: ${remCalc(25)};
  transform: rotate(-45deg);
  pointer-events: none;

  ${(props) => props.theme.breakpoints.TABLET} {
    bottom: ${remCalc(40)};
  }
`;

export const MobileDropContainer = styled.div`
  ${(props) => props.theme.spacing({ padding: 'bottom-sm' })}
  position: relative;
`;

export const MobileSelect = styled.select<InputProps>`
  position: ${(props) => (props.hasSelected ? 'relative' : 'absolute')};
  display: block;
  bottom: ${remCalc(-6)};
  font-size: ${remCalc(21)};
  background-color: transparent;
  width: 100%;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }

  height: 100%;
`;
