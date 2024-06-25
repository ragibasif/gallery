import React, { useRef, useEffect, useState } from "react";

const ImageTrail = () => {
  const imagesRef = useRef([]);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

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

      const lerpFactor = 1; // Adjust this value for the desired smoothness (0 to 1)

      activate(lead, e.clientX, e.clientY, lerpFactor);

      if (tail) tail.dataset.status = "inactive";

      setGlobalIndex(globalIndex + 1);
    }
  };

  const handleImageClick = (image) => {
    setFullScreenImage(image);
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenImage(null);
  };

  useEffect(() => {
    if (!isFullScreen) {
      window.addEventListener("mousemove", handleOnMove);
      window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    } else {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    }

    return () => {
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, [globalIndex, lastPosition, isFullScreen]);

  useEffect(() => {
    imagesRef.current.forEach((image) => {
      image.addEventListener("click", () => handleImageClick(image));
    });

    return () => {
      imagesRef.current.forEach((image) => {
        image.removeEventListener("click", () => handleImageClick(image));
      });
    };
  }, [imagesLoaded]);

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

  return (
    <>
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={handleExitFullScreen}>
          <img
            src={fullScreenImage?.getAttribute("src")}
            alt="Full screen"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </>
  );
};

export default ImageTrail;
