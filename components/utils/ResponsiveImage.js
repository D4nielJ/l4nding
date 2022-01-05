import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useWindowSize from './useWindowSize';

const ResponsiveImage = ({ src, ext = 'jpg', alt, ...props }) => {
  const { width: windowWidth } = useWindowSize();
  const [responsive, setResponsive] = useState(undefined);

  useEffect(() => {
    if (windowWidth > '768') {
      setResponsive('desktop');
    } else {
      setResponsive('mobile');
    }
  }, [windowWidth]);

  return (
    <Image src={`${src}_${responsive}.${ext}`} alt={alt} {...props} />
  );
};

export default ResponsiveImage;
