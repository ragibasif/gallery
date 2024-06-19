import { useState, useEffect } from "react";
// react hook

const useImagePreloader = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
      });
    };

    Promise.all(imageUrls.map(loadImage)).then(() => {
      if (isMounted) {
        setLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagePreloader;
