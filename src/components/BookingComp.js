import { useContext } from "react";
import { Row } from "react-bootstrap";
import "./Comp.css";
import CompCard from "./CompCard";
import FavoritesContext from "./FavoritesCtx";

function BookingComp() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <div className="centerText">
        <h3> You have not booked anything yet. Start adding some?</h3>
      </div>
    );
  } else {
    content = (
      <Row className="style" xs={1} md={2} lg={3}>
        {/* Using .map function to map through our .json data to make code cleaner */}
        {favoritesCtx.favorites.map((item) => (
          <CompCard
            key={item.id}
            id={item.id}
            imgSrc={item.image}
            title={item.title}
            cText={item.description}
          />
        ))}
      </Row>
    );
  }

  return (
    <section>
      <div className="comp">
        <h1>BOOKING</h1>
        {content}
      </div>
    </section>
  );
}

export default BookingComp;
