import CompCard from "./CompCard";
import { Row } from "react-bootstrap";
import "./Comp.css";

import RestaurantData from "../data/RestaurantPageData.json";

function RestaurantComp() {
  return (
    <div className="comp">
      <h1>RESTAURANTS</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        {/* Using .map function to map through our .json data to make code cleaner */}
        {RestaurantData.map((item) => (
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

export default RestaurantComp;
