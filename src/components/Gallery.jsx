import { useState, useEffect } from "react";
import useImagePreloader from "./useImagePreloader";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const imagesToPreload = [
    "/src/assets/images/IMG_0686.jpg",
    "/src/assets/images/IMG_0684.jpg",
    "/src/assets/images/IMG_0687.jpg",
    "/src/assets/images/IMG_0689.jpg",
    "/src/assets/images/IMG_0706.jpg",
    "/src/assets/images/IMG_0702.jpg",
    "/src/assets/images/IMG_0630.jpg",
    "/src/assets/images/IMG_0302.jpg",
    "/src/assets/images/IMG_0629.jpg",
    "/src/assets/images/IMG_0628.jpg",
    "/src/assets/images/IMG_0685.jpg",
    "/src/assets/images/IMG_0695.jpg",
    "/src/assets/images/IMG_0683.jpg",
    "/src/assets/images/IMG_0698.jpg",
    "/src/assets/images/IMG_0461.jpg",
    "/src/assets/images/IMG_0301.jpg",
    "/src/assets/images/IMG_0699.jpg",
    "/src/assets/images/IMG_0690.jpg",
    "/src/assets/images/IMG_0303.jpg",
    "/src/assets/images/IMG_0688.jpg",
    "/src/assets/images/IMG_0633.jpg",
    "/src/assets/images/IMG_0300.jpg",
    "/src/assets/images/IMG_0277.jpg",
    "/src/assets/images/IMG_0627.jpg",
    "/src/assets/images/IMG_0299.jpg",
    "/src/assets/images/IMG_0691.jpg",
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
        setLastPosition({x:currentPosition.x, y:currentPosition.y});
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
    // const handleTouchMove = (e) => {
    //   const newE = e.touches[0];
    //   if (!fullscreenImage) {
    //     setCurrentPosition({ x: newE.clientX, y: newE.clientY });
    //     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    //   }
    // };
    // window.addEventListener("ontouchmove", handleTouchMove);
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
      <div
        className="cursor-follower"
        style={{ left: currentPosition.x, top: currentPosition.y }}
      ></div>
      {images.length > 0 && (
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex}`}
          draggable="false"
          className={`image ${fullscreenImage ? "hidden" : "active"}`}
          style={{
            left: `${currentPosition.x}px`,
            top: `${currentPosition.y}px`,
          }}
          onClick={() => handleImageClick(images[activeIndex])}
        />
      )  }

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

export default Gallery;


// TODO:to be translated

/*
// Fetch the JSON file
fetch("./images.json")
  .then((response) => response.json())
  .then((data) => {
    const imageContainer = document.getElementById("images");

    // Iterate over the JSON data
    data.forEach((image) => {
      // Create an img element
      const imgElement = document.createElement("img");
      imgElement.src = image.filename;
      imgElement.id = image.id;
      imgElement.classList.add("image");
      imgElement.setAttribute("data-index", image.id);
      imgElement.setAttribute("data-status", "inactive");
      imgElement.setAttribute("draggable", "false");

      // Append the img element to the container
      imageContainer.appendChild(imgElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON file:", error);
  });

let activeIndex = 0,
  last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = activeIndex;

  image.dataset.status = "active";
  image.setAttribute("draggable", "false");

  last = { x, y };
};

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
};

const handleOnMove = (e) => {
  if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
    const lead = images[activeIndex % images.length],
      tail = images[(activeIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if (tail) tail.dataset.status = "inactive";

    activeIndex++;
  }
};

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
*/
