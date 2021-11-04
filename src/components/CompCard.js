import { Card, Col } from "react-bootstrap";

function CompCard() {
  return (
    <Col>
      <Card border="info" style={{ width: "25rem", marginTop: "5%" }}>
        <Card.Img
          variant="top"
          src="https://a.cdn-hotels.com/gdcs/production87/d1048/4ed1a1e8-afa7-4640-b8ca-d1d6ccbb54c1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        />
        <Card.Body>
          <Card.Title>El Nido Marine Reserve Park</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CompCard;
