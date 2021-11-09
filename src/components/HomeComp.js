import Image from "react-bootstrap/Image";
import "./HomeComp.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

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
          <Link to={props.pageTag} className="btn button">
            <ArrowForwardIcon className="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
