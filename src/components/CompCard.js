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
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.cText}</Card.Text>
          <Button variant="info" onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CompCard;
