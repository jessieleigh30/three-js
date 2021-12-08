import Error from '@components/FormElements/Error';
import * as React from 'react';

import { FieldGroup, Label, Input, RadioLabel, RadioContainer } from './styles';

interface Props {
  name: string;
  register: any;
  watch: any;
  error: { type: string };
  placeholder: string;
  required?: boolean;
  notRequired?: boolean;
  pattern?: RegExp;
  errorMessages?: Record<string, string>;
  type?: string;
}

const Radio = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  watch,
  error,
  pattern,
  ...props
}: Props) => {
  const [isFocused, setFocus] = React.useState<string | null>(null);
  return (
    <FieldGroup>
      <Label>
        <h4>{placeholder}</h4>
      </Label>
      <RadioContainer>
        <RadioLabel>
          <Input
            {...props}
            name={name}
            ref={register({ required, pattern })}
            onFocus={() => setFocus(name)}
            onBlur={() => setFocus(null)}
            hasFocus={isFocused || watch(name)}
            hasError={!!error}
            data-testid="form-input"
            type="radio"
            value="Yes"
          />
          <h4>Yes</h4>
        </RadioLabel>
        <RadioLabel>
          <Input
            {...props}
            name={name}
            ref={register({ required, pattern })}
            onFocus={() => setFocus(name)}
            onBlur={() => setFocus(null)}
            hasFocus={isFocused || watch(name)}
            hasError={!!error}
            data-testid="form-input"
            type="radio"
            value="No"
          />
          <h4>No</h4>
        </RadioLabel>
      </RadioContainer>
      <Error errorMessages={errorMessages} error={error} />
    </FieldGroup>
  );
};

export default Radio;
