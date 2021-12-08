import * as React from 'react';

import {
  FieldGroup,
  Label,
  Input,
  RadioLabel,
  RadioContainer,
  Small,
} from './styles';
import { FieldError } from 'react-hook-form/dist/types';

interface Props {
  name: string;
  register: any;
  watch: any;
  errors: Partial<Record<string, FieldError>>;
  placeholder: string;
  required?: boolean;
  notRequired?: boolean;
  pattern?: RegExp;
  errorMessages?: Record<string, string>;
  type?: string;
  options: Array<{ value: string; label: string }>;
}

const MultipleRadio = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  errors,
  pattern,
  options,
  ...props
}: Props) => {
  return (
    <FieldGroup>
      <Label>
        <p>{placeholder}</p>
      </Label>
      <RadioContainer>
        {options.map(({ value, label }, index) => (
          <div key={index}>
            <Input
              {...props}
              id={`${name}_${index}`}
              name={name}
              ref={register({ required, pattern })}
              hasError={!!errors[name]}
              data-testid="form-input"
              type="radio"
              value={value}
            />
            <RadioLabel htmlFor={`${name}_${index}`}>
              <p>{label}</p>
            </RadioLabel>
          </div>
        ))}
      </RadioContainer>
      {errors[name] && (
        <Small>
          {errorMessages
            ? errorMessages[errors[name]!.type]
            : 'This field is required'}
        </Small>
      )}
    </FieldGroup>
  );
};

export default MultipleRadio;
