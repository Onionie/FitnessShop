import { Row } from "react-bootstrap";
import CompCard from "./CompCard";
import "./Comp.css";

import HotelsData from "../data/HotelsPageData.json";

function HotelsComp() {
  return (
    <div className="comp">
      <h1>HOTELS</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        {HotelsData.map((item) => (
          <CompCard
            key={item.id}
            id={item.id}
            imgSrc={item.image}
            title={item.title}
            cText={item.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default HotelsComp;
