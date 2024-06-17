import { useState, useEffect } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/images.json"); // Assuming images.json is in the public directory
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageClick = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div className="image-container">
      <div
        className="cursor-follower"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.filename}
          alt={image.filename}
          className="thumbnail"
          onClick={() => handleImageClick(image.filename)}
        />
      ))}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
