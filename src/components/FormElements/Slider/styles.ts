import styled from 'styled-components';
import { remCalc } from '@lib/helperMethods';

interface InputProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const FieldGroup = styled.div<InputProps>`
  ${(props) => props.theme.spacing({ margin: 'top-md' })};
  padding-top: ${remCalc(25)};
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

export const Input = styled.input<InputProps>`
  -webkit-appearance: none;
  width: 100%;
  height: ${remCalc(1)};
  background: ${(props) => props.theme.COLORS.BOX_SHADOW_001};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 100%;
    width: ${remCalc(16)};
    height: ${remCalc(16)};
    background: ${(props) => props.theme.COLORS.PRIMARY_002};
    border: none;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    border-radius: 100%;
    width: 16px;
    height: 26px;
    background: ${(props) => props.theme.COLORS.PRIMARY_002};
    cursor: pointer;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  font-weight: ${(props) => props.theme.FONT_WEIGHT_LIGHT};
  color: ${(props) => props.theme.COLORS.FONT_COLOR};
`;

export const SliderValue = styled.div`
  text-align: center;
  margin-top: ${remCalc(20)};
`;

export const SliderMinValue = styled.div`
  display: inline;
`;

export const SliderMaxValue = styled.div`
  display: inline;
  float: right;
`;

export const Small = styled.p`
  position: absolute;
  bottom: ${remCalc(-14)};
  font-size: ${remCalc(15)};
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;
