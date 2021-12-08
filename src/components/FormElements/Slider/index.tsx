import * as React from 'react';
import {
  FieldGroup,
  Label,
  Input,
  Small,
  SliderContainer,
  SliderValue,
  SliderMinValue,
  SliderMaxValue,
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
  getValues: any;
  setValue: any;
  trigger: any;
}

const Slider = ({
  name,
  placeholder,
  required,
  register,
  errorMessages,
  watch,
  errors,
  pattern,
  ...props
}: Props) => {
  const [isFocused, setFocus] = React.useState<string | null>(null);
  register(name, { required, pattern });

  const service = props.getValues('service');
  const value = props.getValues(name);

  let min = 20000;
  let max = 1000000;

  if (service?.length === 1 && service[0] === 'Content') {
    min = 1000;
    max = 100000;
  }

  const list = React.useMemo(
    () =>
      [
        ...[...Array(50).keys()].map((item) => item * 1000),
        ...[...Array(90).keys()].map((item) => 50000 + item * 5000),
        ...[...Array(21).keys()].map((item) => 500000 + item * 25000),
      ].filter((item) => item <= max && item >= min),
    [min, max]
  );

  const formatCurrency = React.useCallback((val: number) => {
    const formatted = val / 1000;
    return formatted !== 1000 ? `${formatted}K` : '1M';
  }, []);

  React.useEffect(() => {
    const mid = max === 1000000 ? 250000 : 30000;

    setTimeout(() => {
      props.setValue(name, mid, true);
      props.trigger(name);
    }, 20);
  }, [list]);

  const minValFormatted = React.useMemo(
    () => formatCurrency(list[0]),
    [formatCurrency, list]
  );
  const maxValFormatted = React.useMemo(
    () => formatCurrency(list[list.length - 1]),
    [formatCurrency, list]
  );

  return (
    <FieldGroup>
      <Label>
        <p>{placeholder}</p>
      </Label>

      <SliderContainer>
        <SliderMinValue>&lt;{minValFormatted}</SliderMinValue>
        <SliderMaxValue>{maxValFormatted}+</SliderMaxValue>
        <Input
          {...props}
          name={name}
          onFocus={() => setFocus(name)}
          onBlur={() => setFocus(null)}
          onChange={(e: any) => {
            props.setValue(name, list[parseInt(e.target.value)], true);
            props.trigger(name);
          }}
          hasFocus={isFocused || watch(name)}
          hasError={!!errors[name]}
          data-testid="form-input"
          type="range"
          value={list.indexOf(value)}
          min={0}
          max={list.length - 1}
        />
        <SliderValue>${formatCurrency(value)}</SliderValue>
      </SliderContainer>

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

export default Slider;
