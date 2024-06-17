import "./Icon.css";
const Icon = ({ alt, href, src, target }) => {
  return (
    <>
      <a className="iconLink" href={href} target={target}>
        <img className="iconImg" src={src} alt={alt} />
      </a>
    </>
  );
};

export default Icon;
