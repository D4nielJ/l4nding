import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';

const TextAreaInput = ({ label, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={props.name}>
        {label}
      </FormLabel>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      <Textarea
        id={props.name}
        type={type}
        placeholder={placeholder}
        minH={40}
        size='lg'
        mb={4}
        rounded='none'
        bg='black.900'
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default TextAreaInput;
