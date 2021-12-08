import { Container, Row } from '@identity/grid';
import Main from '@identity/main';
import { createDynamicInput } from '@lib/dynamicComponents';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Checkbox,
  InputField,
  Radio,
  Select,
  Slider,
  SubmitBtn,
  TextAreaField,
  Success,
} from '@components/FormElements';
import { FormContainer, FormWrapper, RowWrapper } from './styles';
import CONFIG from './config';

const dynamicComponents = {
  /* eslint-disable */
  input: (props: any) => <InputField {...props} />,
  radio: (props: any) => <Radio {...props} />,
  textarea: (props: any) => <TextAreaField {...props} />,
  checkbox: (props: any) => <Checkbox {...props} />,
  range: (props: any) => <Slider {...props} />,
  dropdown: (props: any) => <Select {...props} />,
  /* eslint-enable */
};

const DynamicContent = createDynamicInput(dynamicComponents);

const Index = () => {
  // @ts-ignore
  const { handleSubmit, formState, ...props } = useForm({
    mode: 'onChange',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { title, fields, onSubmit } = CONFIG;

  const internalHandleSubmit = React.useCallback(
    (data: any, e: any) => {
      e.target.reset();
      try {
        onSubmit(data);
        setIsSubmitted(true);
        setOpen(true);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } catch (e) {
        console.error(e);
      }
    },
    [setIsSubmitted, setOpen, onSubmit]
  );

  const hideInput = React.useCallback(
    (linked: { name: string; value: string }) => {
      if (linked) {
        const currentVal = props.getValues(linked.name);
        if (linked.value !== currentVal) {
          return true;
        }
      }
      return false;
    },
    [props.getValues]
  );

  return (
    <FormContainer>
      <Main key="form">
        {!isOpen && (
          <Container>
            <Row>
              <h3>{title}</h3>
              <FormWrapper onSubmit={handleSubmit(internalHandleSubmit)}>
                {(fields as Array<any>).map((field: any) => (
                  <RowWrapper hide={hideInput(field.linked)} key={field.name}>
                    <DynamicContent {...field} {...props} />
                  </RowWrapper>
                ))}
                <SubmitBtn
                  isValid={formState.isValid}
                  isSubmitted={isSubmitted}
                />
              </FormWrapper>
            </Row>
          </Container>
        )}
        <Success isOpen={isOpen} name={props.watch('name')}>
          <Link href="/" scroll={false} passHref>
            <a>
              <h4>Home</h4>
            </a>
          </Link>
        </Success>
      </Main>
    </FormContainer>
  );
};

export default Index;
