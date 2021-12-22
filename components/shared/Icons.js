import { HStack } from '@chakra-ui/react';
import { IconLink } from '../l4nding';
import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
} from 'react-icons/ri';

const Icons = ({ justify, spacing, iconSize, withMail = false, ...props }) => {
  return (
    <HStack width='full' justify={justify} spacing={spacing} {...props}>
      {withMail && (
        <IconLink
          href='mailto:d4niel.djm@gmail.com'
          icon={HiOutlineMail}
          iconSize={iconSize}
        />
      )}
      <IconLink
        href='https://www.linkedin.com/in/d4nielj/'
        icon={RiLinkedinBoxLine}
        iconSize={iconSize}
      />
      <IconLink
        href='https://www.twitter.com/d4niel_jm/'
        icon={RiTwitterLine}
        iconSize={iconSize}
      />
      <IconLink
        href='https://www.telegram.me/d4nielj/'
        icon={RiTelegramLine}
        iconSize={iconSize}
      />
    </HStack>
  );
};

export default Icons;
