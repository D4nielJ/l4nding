import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';

const IconLink = ({ href, icon }) => {
  return (
    <Link href={href} isExternal>
      <Icon
        fontSize='3xl'
        as={icon}
        transition='ease-out'
        transitionProperty='all'
        transitionDuration='normal'
        _hover={{
          transform: 'scale(1.15, 1.15)',
        }}
      />
    </Link>
  );
};

export default IconLink;
