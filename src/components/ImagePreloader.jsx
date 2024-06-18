import { useState, useEffect } from "react";
import useImagePreloader from "./useImagePreloader";

const MyComponent = () => {
  const imagesToPreload = [
    "images/IMG_0686.jpg",
    "images/IMG_0684.jpg",
    "images/IMG_0687.jpg",
    "images/IMG_0689.jpg",
    "images/IMG_0706.jpg",
    "images/IMG_0702.jpg",
    "images/IMG_0630.jpg",
    "images/IMG_0302.jpg",
    "images/IMG_0629.jpg",
    "images/IMG_0628.jpg",
    "images/IMG_0685.jpg",
    "images/IMG_0695.jpg",
    "images/IMG_0683.jpg",
    "images/IMG_0698.jpg",
    "images/IMG_0461.jpg",
    "images/IMG_0301.jpg",
    "images/IMG_0699.jpg",
    "images/IMG_0690.jpg",
    "images/IMG_0303.jpg",
    "images/IMG_0688.jpg",
    "images/IMG_0633.jpg",
    "images/IMG_0300.jpg",
    "images/IMG_0277.jpg",
    "images/IMG_0627.jpg",
    "images/IMG_0299.jpg",
    "images/IMG_0691.jpg",
  ];
  const imagesLoaded = useImagePreloader(imagesToPreload);

  return (
    <>
      {!imagesLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          {imagesToPreload.map((src, index) => (
            <img key={index} src={src} alt={`Preloaded image ${index + 1}`} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyComponent;
