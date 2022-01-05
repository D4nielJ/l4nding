import React, { useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { TextAreaInput, TextInput } from '../shared/forms';
import { SquareButton } from '../shared';

const FormFields = ({ isSubmitting, sent, setSent }) => {
  const {
    values: { firstName, lastName, email, message },
  } = useFormikContext();

  useEffect(() => {
    if (firstName || lastName || email || message) {
      setSent(false);
    }
  }, [firstName, lastName, email, message, setSent]);

  useEffect(() => {
    localStorage.setItem(
      'contactForm',
      JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      })
    );
  }, [firstName, lastName, email, message]);

  return (
    <Form>
      <TextInput
        label='First name'
        name='firstName'
        type='text'
        placeholder='First name'
      />
      <TextInput
        label='Last name'
        name='lastName'
        type='text'
        placeholder='Last name'
      />
      <TextInput
        label='Email address'
        name='email'
        type='email'
        placeholder='Email address'
      />
      <TextAreaInput
        label='Write your message here...'
        name='message'
        type='text'
        placeholder='Write your message here...'
        sent={sent}
        mb={6}
      />
      <SquareButton text='Send' isLoading={isSubmitting} withBall />
    </Form>
  );
};

export default FormFields;
