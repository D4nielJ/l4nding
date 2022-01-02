import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={props.name}>
        {label}
      </FormLabel>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      <Input
        id={props.name}
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

export default TextInput;
