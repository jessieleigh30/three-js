import Error from '@components/FormElements/Error';
import * as React from 'react';

import { FieldGroup, Label, ReverseContainer } from '../styles';
import { TextArea, TextAreaContainer } from './styles';

interface Props {
  name: string;
  register: any;
  watch: any;
  error?: { type: string };
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
  errorMessages?: Record<string, string>;
  type?: string;
  setValue: any;
  trigger: any;
}

const TextAreaField = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  error,
  pattern,
  trigger,
  setValue,
  watch,
  ...props
}: Props) => {
  const ref = React.useRef<any>();
  const [focused, setFocus] = React.useState(false);
  const currentVal = watch(name);
  register({ name, type: 'custom' }, { required, pattern });
  const focusTextArea = () => {
    if (ref.current) ref.current?._ref?.focus();
  };

  React.useEffect(() => {
    if (!focused && !!currentVal) setFocus(true);
  }, [focused, setFocus, currentVal]);

  return (
    <FieldGroup onClick={focusTextArea} hasFocus={focused}>
      <ReverseContainer>
        <TextAreaContainer hasFocus={focused || !!currentVal}>
          <TextArea
            {...props}
            ref={ref}
            name={name}
            rows={0}
            placeholder=" "
            id={name}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
            }}
            data-testid="form-input"
            hasError={!!error}
            onChange={(elem) => {
              setValue(name, elem.currentTarget.value);
              trigger(name);
            }}
          />
        </TextAreaContainer>
        <Label hasFocus={focused}>
          <h4>{placeholder}</h4>
        </Label>
      </ReverseContainer>
      <Error error={error} errorMessages={errorMessages} />
    </FieldGroup>
  );
};

export default TextAreaField;
