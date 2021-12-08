import { emailValidator } from '@lib/helperMethods';
import axios from 'axios';

const config = {
  id: 1,
  linkTitle: 'Hire Underbelly Dev for my project',
  title: 'Hire Underbelly Dev for my project.',
  fields: [
    {
      name: 'name',
      type: 'input',
      placeholder: 'What is your name?',
      required: true,
      errorMessages: {
        required: 'Name is required',
      },
    },
    {
      name: 'email',
      type: 'input',
      pattern: emailValidator,
      placeholder: 'What is your email?',
      errorMessages: {
        required: 'Email is required',
        pattern: 'Please enter a valid email',
      },
      required: true,
    },
    {
      name: 'problem',
      placeholder: 'What problem can we solve for you?',
      type: 'textarea',
      required: true,
    },
    {
      name: 'budget',
      placeholder: 'What is your budget?',
      type: 'dropdown',
      options: [
        'Less than $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000 or more',
        'To be determined',
      ],
      required: true,
    },
  ],
  async onSubmit(data: any) {
    axios.post('/api/contact', {
      data: {
        name: data.name,
        assignee_id: 896224,
        email: {
          email: data.email,
          category: 'work',
        },
        details: data.problem,
        custom_fields: [
          {
            custom_field_definition_id: 444959,
            value: data.problem,
          },
          {
            custom_field_definition_id: 444900,
            value: 1513120,
          },
          {
            custom_field_definition_id: 473777,
            value: data.budget,
          },
        ],
        customer_source_id: 1058200,
      },
    });
  },
};

export default config;
