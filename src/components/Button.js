import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  const clickHandler = () => {
    <Link to={props.} ></Link>
  };

  return (
    <button onClick={clickHandler}>
      <ArrowForwardIcon />
    </button>
  );
}

export default Button;
