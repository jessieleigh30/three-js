import * as React from 'react';
import { ButtonContainer, Button, Arrow } from './styles';

interface Props {
  isSubmitted: boolean;
  isValid: boolean;
}

const SubmitBtn = ({ isSubmitted, isValid }: Props) => (
  <>
    {isSubmitted && isValid ? (
      <h4>Submitted</h4>
    ) : (
      <ButtonContainer isValid={isValid}>
        <Button type="submit" isValid={isValid} data-testid="submit-btn">
          <h4>Submit</h4>
          <Arrow size="large" />
        </Button>
      </ButtonContainer>
    )}
  </>
);

export default SubmitBtn;
