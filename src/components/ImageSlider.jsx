import React, { useRef, useEffect, useState } from "react";

const ImageSlider = () => {
  const imagesRef = useRef([]);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false); // State to track if images are loaded

  useEffect(() => {
    const images = document.getElementsByClassName("image");
    imagesRef.current = Array.from(images);

    // Preload images
    preloadImages();
  }, []);

  const preloadImages = () => {
    let loadedCount = 0;

    imagesRef.current.forEach((image) => {
      const imageUrl = image.getAttribute("src");
      if (imageUrl) {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          // Check if all images are loaded
          if (loadedCount === imagesRef.current.length) {
            setImagesLoaded(true);
          }
        };
        img.src = imageUrl;
      }
    });
  };

  const activate = (image, x, y, lerpFactor) => {
    if (image) {
      const targetX = lastPosition.x + (x - lastPosition.x) * lerpFactor;
      const targetY = lastPosition.y + (y - lastPosition.y) * lerpFactor;

      image.style.left = `${targetX}px`;
      image.style.top = `${targetY}px`;
      image.style.zIndex = globalIndex;

      image.dataset.status = "active";

      setLastPosition({ x: targetX, y: targetY });
    }
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - lastPosition.x, y - lastPosition.y);
  };

  const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 5) {
      const leadIndex = globalIndex % imagesRef.current.length;
      const tailIndex = (globalIndex - 5) % imagesRef.current.length;

      const lead = imagesRef.current[leadIndex];
      const tail =
        imagesRef.current[
          tailIndex >= 0 ? tailIndex : tailIndex + imagesRef.current.length
        ];

      const lerpFactor = 0.2; // Adjust this value for the desired smoothness (0 to 1)

      activate(lead, e.clientX, e.clientY, lerpFactor);

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

  if (!imagesLoaded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return null; // Since this component manipulates the DOM directly, it doesn't render any JSX
};

export default ImageSlider;
