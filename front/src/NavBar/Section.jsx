import { Link } from "react-router-dom";
import "./Section.scss";
import logo from "../res/logo.svg";

const Section = (props) => {
  return (
    <div className="Section">
      <div className="section_logo">
        <img src={logo} alt="" />
        <h1>Fairygramm</h1>
      </div>
      <div className="section_login">
        <ul>
          <li>
            <Link activeClassName="activeLink" to="/registr">
              Registration 123
            </Link>
          </li>
          <li>
            <Link activeClassName="activeLink" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
