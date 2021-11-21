import ActiveLink from './ActiveLink';
import { nanoid } from 'nanoid';
import { VStack } from '@chakra-ui/react';

const links = [
  {
    id: nanoid(),
    name: 'Home',
    address: '/',
    enable: true,
  },
  {
    id: nanoid(),
    name: 'Projects',
    address: '/projects',
    enable: true,
  },
  {
    id: nanoid(),
    name: 'Stats',
    address: '/stats',
    enable: true,
  },
  {
    id: nanoid(),
    name: 'Contact',
    address: '/contact',
    enable: true,
  },
  {
    id: nanoid(),
    name: 'Styles',
    address: '/styles',
    enable: false,
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
