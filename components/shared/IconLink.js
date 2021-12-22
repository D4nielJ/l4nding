import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';

const IconLink = ({ href, icon, iconSize = '3xl' }) => {
  return (
    <Link href={href} isExternal>
      <Icon
        fontSize={iconSize}
        as={icon}
        transition='ease-out'
        transitionProperty='all'
        transitionDuration='normal'
      />
    </Link>
  );
};

export default IconLink;
