import CompCard from "./CompCard";
import { Row } from "react-bootstrap";
import "./Comp.css";
import AdventureData from "../data/AdventurePageData.json";

function BookingComp() {
  return (
    <div className="comp">
      <h1>BOOKING</h1>
      <Row className="style" xs={1} md={2} lg={3}></Row>
    </div>
  );
}

export default BookingComp;
