import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./AdventureComp.css";

function AdventureComp() {
  return (
    <Row className="style" xs={1} md={3} style={{ margin: "5% 10%" }}>
      <CompCard />
      <CompCard />
      <CompCard />
    </Row>
  );
}

export default AdventureComp;
