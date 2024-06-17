import Github from "./Github";
import Linkedin from "./Linkedin";
import Email from "./Email";
import Copyright from "./Copyright";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <Github />
          <Linkedin />
          <Email />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
