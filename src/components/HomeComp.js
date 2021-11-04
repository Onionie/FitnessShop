import Image from "react-bootstrap/Image";
import Button from "./Button.js";
import "./HomeComp.css";

function HomeComp(props) {
  return (
    <div className="parent">
      <Image
        className="rectangle"
        src={props.imageSrc}
        alt={props.altName}
        fluid
      ></Image>
      <div className="center">
        <h1>{props.heading1}</h1>
        <h2>{props.heading2}</h2>
        <div className="buttondiv">
          <Button link={props.pageTag} />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
