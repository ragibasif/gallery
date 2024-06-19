import { useState, useEffect } from "react";
import useImagePreloader from "./useImagePreloader";
import PreloadedGallery from "./PreloadedGallery";
import "./ExperimentalGallery.css";
// import "./ImageGallery.css";

const MyComponent = () => {
  const [images, setImages] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [fullscreenImage, setFullscreenImage] = useState(null);

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

  useEffect(() => {
    // Simulate an API call to fetch images
    const fetchedImages = imagesToPreload;
    setImages(fetchedImages);
  }, []); // Empty dependency array means this runs once after initial render

  useEffect(() => {
    if (images.length === 0) return;

    const handleMouseMove = (e) => {
      if (!fullscreenImage) {
        setCurrentPosition({ x: e.clientX, y: e.clientY });
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [images, fullscreenImage]);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleOverlayClick = () => {
    setFullscreenImage(null);
  };
  const imagesLoaded = useImagePreloader(imagesToPreload);
  return (
    <>
    {!imagesLoaded ? (
        <div>Loading...</div>
      ) : (
    <div className="image-container">

      {images.length > 0 && (
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex}`}
          className={`image ${fullscreenImage ? "hidden" : "active"}`}
          style={{
            left: `${currentPosition.x}px`,
            top: `${currentPosition.y}px`,
          }}
          onClick={() => handleImageClick(images[activeIndex])}
        />
      )}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleOverlayClick}>
          <img
            src={fullscreenImage}
            alt={`Fullscreen ${fullscreenImage.id}`}
            className="fullscreen-image"
          />
        </div>
      )}
    </div>

      )} 
    </>
  );
};

export default MyComponent;
