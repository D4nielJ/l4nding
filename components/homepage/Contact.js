import React from 'react';
import { Box, Text, Divider, VStack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, TextAreaInput } from '../shared/forms';
import { SquareButton } from '../shared';

const Contact = () => {
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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            message: Yup.string().required('Required'),
          })}
          onSubmit={(fields, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {(props) => (
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
                mb={6}
              />
              <SquareButton text='Send' withBall />
            </Form>
          )}
        </Formik>
      </VStack>
    </Box>
  );
};

export default Contact;
