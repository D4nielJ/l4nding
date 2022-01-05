import { MotionBox } from '../utils';

const Backdrop = ({ toggleOpen, children, ...props }) => {
  const handleToggleKey = (e) => {
    if (e.keyCode === 13) {
      toggleOpen();
    }
    if (e.keyCode === 27) {
      toggleOpen();
    }
  };

  return (
    <MotionBox
      position='fixed'
      top={0}
      left={0}
      w={'full'}
      h={'full'}
      zIndex='80'
      overflow='hidden'
      backdropFilter='auto'
      backdropBlur='8px'
      className='firefox-fallback'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => toggleOpen()}
      onKeyDown={(e) => handleToggleKey(e)}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default Backdrop;
