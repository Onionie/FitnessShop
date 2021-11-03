import { Image } from "react-bootstrap";
import "./HomeComp.css";

function HomeComp(props) {
  return (
    <div className="rectangle">
      <Image
        className="rectangle"
        src="https://cdn.suwalls.com/wallpapers/beaches/palawan-island-resort-philippines-28615-1920x1080.jpg"
        alt="hotel-beach"
        fluid
      ></Image>
      <div className="center">
        <h1>Enjoy</h1>
        <h2>Your Stay</h2>
      </div>
    </div>
  );
}

export default HomeComp;
