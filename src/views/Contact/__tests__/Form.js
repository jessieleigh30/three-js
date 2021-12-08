import React from 'react';
import { render, fireEvent, cleanup, wait } from 'test-utils';
import Index from '../Form';
import * as data from '../data';

const onSubmit = jest.fn();
window.gtag = jest.fn();

data.FORM_CONFIG = {
  'about-work': {
    id: 4,
    linkTitle: 'Something else',
    title: "Tell us what's on your mind.",
    fields: [
      ...data.DEFAULT_FIELDS,
      {
        name: 'do',
        placeholder: 'What can we do for you?',
        type: 'textarea',
        required: true,
      },
    ],
    onSubmit,
  },
  'about-anything': {
    id: 4,
    linkTitle: 'Something else',
    title: "Tell us what's on your mind.",
    fields: [
      ...data.DEFAULT_FIELDS,
      {
        name: 'do',
        placeholder: 'What can we do for you?',
        type: 'textarea',
        required: true,
      },
    ],
    onSubmit,
  },
};

const PROPS = {
  query: 'about-anything',
};

window.MutationObserver = class {
  observe = jest.fn();
  disconnect = jest.fn();
};

console.error = jest.fn();

describe('Form', () => {
  afterEach(() => {
    onSubmit.mockClear();
    cleanup();
  });

  it('hides submit button once submitted', async () => {
    const { getByTestId, getAllByTestId, queryByTestId } = render(
      <Index {...PROPS} />
    );
    const btn = getByTestId('submit-btn');
    expect(btn).toHaveTextContent('Submit');
    const inputs = getAllByTestId('form-input');

    inputs.forEach((input) => {
      if (input.name === 'email') {
        fireEvent.change(input, { target: { value: 'test@test.test' } });
      } else {
        fireEvent.change(input, { target: { value: 'Text' } });
      }
    });

    btn.click();

    await wait();
    expect(onSubmit).toHaveBeenCalled();
    const submitBtn = queryByTestId('submit-btn');
    expect(submitBtn).toBeNull();
  });

  describe('GA', () => {
    it('doesnt send GA event when on about-anything', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Index query="about-anything" />
      );
      const btn = getByTestId('submit-btn');
      const inputs = getAllByTestId('form-input');

      inputs.forEach((input) => {
        if (input.name === 'email') {
          fireEvent.change(input, { target: { value: 'test@test.test' } });
        } else {
          fireEvent.change(input, { target: { value: 'Text' } });
        }
      });

      btn.click();
      await wait();
      expect(onSubmit).toHaveBeenCalled();
      expect(window.gtag).not.toHaveBeenCalled();
    });

    it('sends GA event when on about-work', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Index query="about-work" />
      );
      const btn = getByTestId('submit-btn');
      const inputs = getAllByTestId('form-input');

      inputs.forEach((input) => {
        if (input.name === 'email') {
          fireEvent.change(input, { target: { value: 'test@test.test' } });
        } else {
          fireEvent.change(input, { target: { value: 'Text' } });
        }
      });

      btn.click();
      await wait();
      expect(window.gtag).toHaveBeenCalledWith('event', 'FormSubmit', {
        event_category: 'ContactForm',
        event_label: 'Project',
      });
    });
  });

  it('only shows submit after the form is submitted', async () => {
    const { getByTestId, getAllByTestId } = render(<Index {...PROPS} />);

    const btn = getByTestId('submit-btn');
    btn.click();

    await wait();
    // form is invalid
    expect(onSubmit).not.toHaveBeenCalled();

    const inputs = getAllByTestId('form-input');

    inputs.forEach((input) => {
      if (input.name === 'email') {
        fireEvent.change(input, { target: { value: 'test@test.test' } });
      } else {
        fireEvent.change(input, { target: { value: 'Text' } });
      }
    });
  });
});
