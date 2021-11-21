import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import FavoritesContext from "./FavoritesCtx";

function CompCard(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  console.log(itemIsFavorite);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.cText,
        image: props.imgSrc,
        address: props.address,
      });
    }
  }
  return (
    <Col>
      <Card border="info" style={{ width: "25rem", marginTop: "5%" }}>
        <Card.Img className="custom-img" variant="top" src={props.imgSrc} />
        <Card.Body className="cBody">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.cText}</Card.Text>
          <Button
            className="stick-left"
            variant="info"
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Remove from Booking" : "Add to Booking"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CompCard;
