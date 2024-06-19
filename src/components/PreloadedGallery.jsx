import { useState, useEffect } from "react";
// import "./ExperimentalGallery.css";
import "./ImageGallery.css";

const PreloadedGallery = () => {
  const [images, setImages] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [fullscreenImage, setFullscreenImage] = useState(null);

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

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleOverlayClick = () => {
    setFullscreenImage(null);
  };
  console.log(props);

  return (
    <div className="image-container">

          {images.map((src, index) => (
            <img key={index} src={src} alt={`Preloaded image ${index + 1}`} />
          ))}
    </div>
  );
};

export default PreloadedGallery;

// TODO:to be translated

/*
const images = document.getElementsByClassName("image");

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

let globalIndex = 0,
  last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";
  image.setAttribute("draggable", "false");

  last = { x, y };
};

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
};

const handleOnMove = (e) => {
  if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
    const lead = images[globalIndex % images.length],
      tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if (tail) tail.dataset.status = "inactive";

    globalIndex++;
  }
};

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
*/
