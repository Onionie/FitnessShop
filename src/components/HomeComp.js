import { Image } from "react-bootstrap";
import "./HomeComp.css";

function HomeComp(props) {
  return (
    <div className="rectangle">
      <Image src={props.imageSrc} alt={props.altName} fluid></Image>
      <div className="center">
        <h1>{props.heading1}</h1>
        <h2>{props.heading2}</h2>
      </div>
    </div>
  );
}

export default HomeComp;
