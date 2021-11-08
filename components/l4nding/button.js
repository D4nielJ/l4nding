import { Box } from '@chakra-ui/layout';

const ButtonLink = ({ href, download, children, props }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      download={download}
    >
      <Box
        bg='black.800'
        variant='unstyled'
        py={2}
        px={{base: '16', sm: '24', md: '12'}}
        fontWeight='light'
        cursor='pointer'
        transition='ease-in-out'
        transitionProperty='all'
        transitionDuration='normal'
        _hover={{
          transform: 'scale(1.2, 1.2)',
          background: 'black.900',
        }}
        {...props}
      >
        {children}
      </Box>
    </a>
  );
};

export default ButtonLink;
