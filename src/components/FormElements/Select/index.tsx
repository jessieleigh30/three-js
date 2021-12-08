import * as React from 'react';

import Error from '../Error';
import Dropdown from './dropdown';
import { FieldGroup } from './styles';

interface Props {
  name: string;
  register: any;
  watch: any;
  error: { type: string };
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
  errorMessages?: Record<string, string>;
  type?: string;
  setValue: any;
  getValues: any;
  trigger: any;
  options: Array<string>;
}

const Select = ({
  name,
  required,
  register,
  errorMessages,
  error,
  pattern,
  ...props
}: Props) => {
  register({ name, type: 'custom' }, { required, pattern });
  const setValue = React.useCallback((val: string) => {
    props.setValue(name, val, { shouldValidate: true });
    props.trigger(name);
  }, []);

  const selectedItem = props.getValues(name);
  const hasError = !!error;

  return (
    <FieldGroup>
      <Dropdown
        {...props}
        setValue={setValue}
        name={name}
        selectedItem={selectedItem}
        hasError={hasError}
      />
      <Error error={error} errorMessages={errorMessages} />
    </FieldGroup>
  );
};

export default Select;
