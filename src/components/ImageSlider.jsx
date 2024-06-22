import React, { useRef, useEffect, useState } from "react";

const ImageSlider = () => {
  const imagesRef = useRef([]);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const images = document.getElementsByClassName("image");
    imagesRef.current = Array.from(images);

    preloadImages();
  }, []);
  const preloadImages = () => {
    imagesRef.current.forEach((image) => {
      const imageUrl = image.getAttribute("src");
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  };

  const activate = (image, x, y) => {
    if (image) {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = globalIndex;

      image.dataset.status = "active";

      setLastPosition({ x, y });
    }
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - lastPosition.x, y - lastPosition.y);
  };

  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
      const leadIndex = globalIndex % imagesRef.current.length;
      const tailIndex = (globalIndex - 5) % imagesRef.current.length;

      const lead = imagesRef.current[leadIndex];
      const tail =
        imagesRef.current[
          tailIndex >= 0 ? tailIndex : tailIndex + imagesRef.current.length
        ];

      activate(lead, e.clientX, e.clientY);

      if (tail) tail.dataset.status = "inactive";

      setGlobalIndex(globalIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, [globalIndex, lastPosition]);

  return null; // Since this component manipulates the DOM directly, it doesn't render any JSX
};

export default ImageSlider;
