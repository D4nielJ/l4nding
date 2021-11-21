import { HStack } from '@chakra-ui/react';
import { IconLink } from '../l4nding';
import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
} from 'react-icons/ri';

const Icons = ({ justify, spacing }) => {
  return (
    <HStack width='full' justify={justify} spacing={spacing}>
      <IconLink href='mailto:d4niel.djm@gmail.com' icon={HiOutlineMail} />
      <IconLink
        href='https://www.linkedin.com/in/d4nielj/'
        icon={RiLinkedinBoxLine}
      />
      <IconLink
        href='https://www.twitter.com/d4niel_jm/'
        icon={RiTwitterLine}
      />
      <IconLink href='https://www.telegram.me/d4nielj/' icon={RiTelegramLine} />
    </HStack>
  );
};

export default Icons;
