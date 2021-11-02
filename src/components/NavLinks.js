import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div>
      <header>
        <div>
          <h1>TripPH</h1>
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
