import "./Gallery.css";

const Gallery = ({ image, index }) => {
  console.log(image);
  console.log(index);
  return (
    <img
      key={index}
      alt={`${image}, ${index}`}
      className="image"
      data-index={index}
      data-status="inactive"
      src={image}
    />
  );
};

export default Gallery;
