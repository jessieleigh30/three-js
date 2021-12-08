import Error from '@components/FormElements/Error';
import * as React from 'react';

import {
  CheckboxButton,
  CheckboxContainer,
  CheckboxLabel,
  FieldGroup,
  Input,
  Label,
  Options,
} from './styles';

interface Props {
  name: string;
  register: any;
  errorMessages: Record<string, string>;
  placeholder: string;
  required?: boolean;
  notRequired?: boolean;
  pattern?: RegExp;
  error?: { type: string };
  type?: string;
  options?: Array<string>;
  setValue: any;
  trigger: any;
  getValues: any;
}

const Checkbox = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  error,
  pattern,
  options,
  ...props
}: Props) => {
  register(
    { name, type: 'custom' },
    { required, pattern, validate: (value: Array<string>) => value.length > 0 }
  );

  const values = props.getValues(name);

  const setValue = React.useCallback(
    (val: string) => {
      let selectedItems = values || [];

      selectedItems = selectedItems.includes(val)
        ? selectedItems.filter((i: string) => i !== val)
        : [...selectedItems, val];

      props.setValue(name, selectedItems, { shouldValidate: true });
      props.trigger(name);
    },
    [values]
  );

  return (
    <FieldGroup>
      <Label>
        <h4>{placeholder}</h4>
      </Label>
      <Options>
        {options?.map((o) => (
          <CheckboxContainer key={o}>
            <Input
              {...props}
              name={name}
              onClick={() => setValue(o)}
              hasError={!!error}
              data-testid="form-input"
              type="checkbox"
              checked={values?.includes(o)}
            />
            <CheckboxLabel>
              <CheckboxButton onClick={() => setValue(o)}>
                <p>{o}</p>
              </CheckboxButton>
            </CheckboxLabel>
          </CheckboxContainer>
        ))}
      </Options>
      <Error error={error} errorMessages={errorMessages} />
    </FieldGroup>
  );
};

export default Checkbox;
