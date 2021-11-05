import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./Comp.css";

function RestaurantComp() {
  return (
    <div className="comp">
      <h1>RESTAURANT</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        <CompCard
          imgSrc="https://a.cdn-hotels.com/gdcs/production87/d1048/4ed1a1e8-afa7-4640-b8ca-d1d6ccbb54c1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
          title="El Nido Marine Reserve Park"
          cText="This Marine Reserve Park is popular for its limestone cliffs, 50 beaches, 3 major marine habitats, 5 types of forest, and an abundant fauna and flora including over 20 endemic species."
        />
      </Row>
    </div>
  );
}

export default RestaurantComp;
