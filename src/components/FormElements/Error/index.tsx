import * as React from 'react';
import { Small } from './styles';

interface Props {
  errorMessages?: Record<string, string>;
  error?: { type: string };
}

const Error = ({ errorMessages, error }: Props) => {
  if (!error) return null;
  return (
    <Small>
      {errorMessages ? errorMessages[error.type] : 'This is required'}
    </Small>
  );
};

export default Error;
