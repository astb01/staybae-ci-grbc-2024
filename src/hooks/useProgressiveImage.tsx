import { useEffect, useState } from 'react';

const useProgressiveImage = (src: string) => {
  const [imageLoaded, setImageLoaded] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(src);
    };
  }, [src]);

  return imageLoaded;
};

export default useProgressiveImage;
