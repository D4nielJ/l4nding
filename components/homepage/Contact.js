import React, { useEffect, useState } from 'react';
import { Box, Text, Divider, VStack } from '@chakra-ui/react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextInput, TextAreaInput } from '../shared/forms';
import { SquareButton } from '../shared';
import { InsideForm } from './InsideForm';

const Contact = () => {
  const [sent, setSent] = useState(false);
  let initialValues = null;
  if (typeof window !== 'undefined') {
    initialValues = JSON.parse(localStorage.getItem('contactForm')) || {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  }

  return (
    <Box as='section' id='contact' mb={28}>
      <Text
        fontWeight='bold'
        fontSize={{ base: '3xl', md: '4xl' }}
        letterSpacing='tighter'
        lineHeight='1'
        textAlign={['center', 'center', 'left']}
        mb={2}
        zIndex={2}
      >
        Get in touch.
      </Text>
      <Divider opacity='1' mb={12} />
      <VStack align='stretch'>
        <Text
          fontWeight='light'
          maxW='64ch'
          fontSize={{ base: 'lg', md: '2xl' }}
          mb={6}
        >
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I would love to
          help with it.
        </Text>
        {initialValues && (
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              firstName: Yup.string().max(20, 'Maximun 20 characters allowed').required('Required'),
              lastName: Yup.string().max(20, 'Maximun 20 characters allowed').required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              message: Yup.string().max(1000, 'Maximum 1000 characters allowed').required('Required'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              setSent(false);
              await axios.post('https://formspree.io/f/mpzbwjzw', values);
              setSent(true);
              setSubmitting(false);
            }}
          >
            {({ ...props }) => (
              <InsideForm {...props} sent={sent} setSent={setSent} />
            )}
          </Formik>
        )}
        {sent && (
          <Text fontWeight='light' fontSize={{ base: 'md', md: 'lg' }} pt={4}>
            Your message has been sent correctly! :&#41;
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Contact;
