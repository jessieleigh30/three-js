import Error from '@components/FormElements/Error';
import { formatPhone } from '@lib/helperMethods';
import * as React from 'react';

import { FieldGroup, Label, ReverseContainer } from '../styles';

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
}

const InputField = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  error,
  pattern,
  type = 'text',
  ...props
}: Props) => {
  const [focus, setFocus] = React.useState(false);

  const ref1 = register({ required, pattern });
  const ref2 = React.useRef<HTMLInputElement>();

  const focusTextArea = () => {
    if (ref2.current) ref2.current?.focus();
  };

  return (
    <FieldGroup hasError={!!error} hasFocus={focus} onClick={focusTextArea}>
      <ReverseContainer>
        <input
          {...props}
          name={name}
          placeholder=" "
          type="text"
          ref={(_ref) => {
            ref1(_ref);
            // @ts-ignore
            ref2.current = _ref;
          }}
          data-testid="form-input"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => {
            e.target.value =
              type === 'tel' && e.target.value
                ? formatPhone(e.target.value)
                : e.target.value;
          }}
        />
        <Label hasFocus={focus}>
          <h4>{placeholder}</h4>
        </Label>
      </ReverseContainer>
      <Error error={error} errorMessages={errorMessages} />
    </FieldGroup>
  );
};

export default InputField;
