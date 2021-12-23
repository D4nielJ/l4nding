import { useEffect } from 'react';
import { MotionBox } from '../utils';

const Backdrop = ({ children, ...props }) => {
  // useEffect(() => {
  //   document.body.classList.add('overflow-y-hidden');
  //   return () => {
  //     document.body.classList.remove('overflow-y-hidden');
  //   };
  // }, []);

  return (
    <MotionBox
      position='fixed'
      top={0}
      left={0}
      w={'full'}
      h={'full'}
      zIndex="80"
      overflow='hidden'
      backdropFilter='auto'
      backdropBlur='8px'
      className='firefox-fallback'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default Backdrop;
