import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import FormFields from './InsideForm';

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    setInitialValues(
      JSON.parse(localStorage.getItem('contactForm')) || {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }
    );
  }, []);
  return (
    <>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(20, 'Maximun 20 characters allowed')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Maximun 20 characters allowed')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            message: Yup.string()
              .max(1000, 'Maximum 1000 characters allowed')
              .required('Required'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setSent(false);
            await axios.post('https://formspree.io/f/mpzbwjzw', values);
            setSent(true);
            setSubmitting(false);
          }}
        >
          {({ ...props }) => (
            <FormFields {...props} sent={sent} setSent={setSent} />
          )}
        </Formik>
      )}
      {sent && (
        <Text fontWeight='light' fontSize={{ base: 'md', md: 'lg' }} pt={4}>
          Your message has been sent correctly! :&#41;
        </Text>
      )}
    </>
  );
};

export default ContactForm;
