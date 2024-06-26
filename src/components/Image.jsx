import "./Image.css";

const Image = ({ image, index }) => {
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

export default Image;
