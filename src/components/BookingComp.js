import { useContext } from "react";
import FavoritesContext from "./favorites-context";
import CompCard from "./CompCard";
import { Row } from "react-bootstrap";
import "./Comp.css";
import AdventureData from "../data/AdventurePageData.json";

function BookingComp() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No Favorites</p>;
  } else {
    content = <CompCard meetups={favoritesCtx.favorites} />;
  }

  return (
    <div className="comp">
      <h1>BOOKING</h1>
      <Row className="style" xs={1} md={2} lg={3}></Row>
    </div>
  );
}

export default BookingComp;
