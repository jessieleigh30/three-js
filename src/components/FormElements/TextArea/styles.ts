import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

interface TextAreaProps {
  hasFocus?: boolean;
  hasError?: boolean;
}

export const TextArea = styled(TextareaAutosize)<TextAreaProps>`
  line-height: 1.32 !important;
  box-sizing: border-box;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
  margin-bottom: 15px;

  &:focus,
  &:not(:placeholder-shown) {
    margin-top: 15px;
  }
`;

export const TextAreaContainer = styled.div<TextAreaProps>`
  width: 100%;
  height: ${(props) => (props.hasFocus ? 'auto' : '15px')};
  transition: all 500ms ease;
`;
