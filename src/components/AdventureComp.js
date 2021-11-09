import CompCard from "./CompCard";
import { Row } from "react-bootstrap";
import "./Comp.css";
import AdventureData from "../data/AdventurePageData.json";

function AdventureComp() {
  return (
    <div className="comp">
      <h1>ADVENTURES</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        {/* Using .map function to map through our .json data to make code cleaner */}
        {AdventureData.map((item) => (
          <CompCard
            imgSrc={item.image}
            title={item.title}
            cText={item.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default AdventureComp;
