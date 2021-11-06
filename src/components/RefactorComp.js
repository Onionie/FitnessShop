import { Card, Col } from "react-bootstrap";

function RefactorCard(props) {
  return (
    <Col>
      <Card border="info" style={{ width: "25rem", marginTop: "5%" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.cText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RefactorCard;
