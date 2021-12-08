import React, { ReactNode } from 'react';
import Img from '@components/Img';

import {
  SuccessContainer,
  DelighterWrapper,
  SubmitContainer,
  Submitted,
  Button,
  ButtonContainer,
  ButtonContainerDesktop,
  Arrow,
  IconWrapper,
  Message,
} from './styles';

type Props = {
  name: string;
  isOpen: boolean;
  children: ReactNode;
};

const Success = ({ name, isOpen, children }: Props) => (
  <SuccessContainer
    isOpen={isOpen}
    data-testid="success-modal"
    key="successContainer"
  >
    <SubmitContainer key="success">
      <Submitted>
        <h4>Submitted</h4>
        <IconWrapper>
          <i>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 17"
            >
              <path
                fill="#00B2A9"
                d="M.04 9.192l1.414-1.414 5.657 5.657-1.414 1.414zM20.546 0l1.414 1.414-14.85 14.85-1.413-1.415z"
              />
            </svg>
          </i>
        </IconWrapper>
      </Submitted>
      <h2>Thank You {name}</h2>
      <Message>
        <p>
          We have received your message and we will respond as soon as possible.
          We are thrilled to get to know you and are excited to see how we can
          help you.
        </p>
      </Message>
      <ButtonContainer>
        <Button>
          {children}
          <Arrow size="large" />
        </Button>
      </ButtonContainer>
    </SubmitContainer>
    <DelighterWrapper>
      <Img height={555} width={555} src="mail.svg" alt="Send Tacos" />
    </DelighterWrapper>
    <ButtonContainerDesktop>
      <Message>
        <p>
          We have received your message and we will respond as soon as possible.
          We are thrilled to get to know you and are excited to see how we can
          help you.
        </p>
      </Message>
      <br />
      <Button>
        {children}
        <Arrow size="large" />
      </Button>
    </ButtonContainerDesktop>
  </SuccessContainer>
);

export default Success;
