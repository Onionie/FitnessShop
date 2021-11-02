import { Link } from "react-router-dom";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import "./NavLink.css";

function NavLink() {
  return (
    <div>
      <header className="header">
        <div className="title">
          <Link to="/">
            <BeachAccessIcon className="svg" /> TripPH
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/adventure">Adventure</Link>
            </li>
            <li>
              <Link to="/restaurant">Restaurant</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavLink;
