import ActiveLink from './ActiveLink';
import { VStack } from '@chakra-ui/react';

const links = [
  {
    id: 'home',
    name: 'Home',
    address: '/',
    enable: true,
  },
  {
    id: 'stats',
    name: 'Stats',
    address: '/stats',
    enable: false,
  },
  {
    id: 'about',
    name: 'About me',
    address: '#about',
    enable: true,
  },
  {
    id: 'work',
    name: 'Work',
    address: '#work',
    enable: true,
  },
  {
    id: 'contact',
    name: 'Contact',
    address: '#contact',
    enable: true,
  },
];

const NavLinks = ({ onClick, onKeyDown }) => (
  <VStack
    direction='column'
    spacing={4}
    alignItems='left'
    role='group'
    _hover={{ color: 'black.300' }}
    transitionProperty='all'
    transitionTimingFunction='ease-in-out'
  >
    {links &&
      links
        .filter((link) => link.enable)
        .map((link) => (
          <ActiveLink
            key={link.id}
            href={link.address}
            name={link.name}
            onClick={onClick}
            onKeyDown={onKeyDown}
          />
        ))}
  </VStack>
);

export default NavLinks;
