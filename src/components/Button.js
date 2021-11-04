import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <Link to={props.link} className="btn button">
      <ArrowForwardIcon className="arrow" />
    </Link>
  );
}

export default Button;
