import { Stack } from '@chakra-ui/react';
import { IconLink } from '../l4nding';
import { HiOutlineMail } from 'react-icons/hi';
import {
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiTelegramLine,
  RiGithubLine,
} from 'react-icons/ri';

const Icons = ({
  direction = 'row',
  justify,
  spacing,
  iconSize,
  withMail = false,
  noGitHub = false,
  ...props
}) => {
  return (
    <Stack
      direction={direction}
      width='full'
      justify={justify}
      spacing={spacing}
      {...props}
    >
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
      {!noGitHub && (
        <IconLink
          href='https://github.com/d4nielj'
          icon={RiGithubLine}
          iconSize={iconSize}
        />
      )}
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
    </Stack>
  );
};

export default Icons;
