import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./Comp.css";

function RestaurantComp() {
  return (
    <div className="comp">
      <h1>RESTAURANT</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/09/ka-lui-restaurant-300x205.jpg"
          title="Kalui Restaurant"
          cText="KaLui is a native-style restaurant popular with tourists and locals for its fresh and affordable seafood. It’s the most famous restaurant in Puerto Princesa.  Fresh catch of the day, includes sashimi, tempura, shellfish soup, baked mussel and much more."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/La_terrace_Palawan_rest-300x205.jpg"
          title="La Terrasse Restaurant"
          cText="A stylish restaurant in Puerto Princesa that serves amazing dishes made with fresh and organic ingredients. La Terrace Restaurant is the ideal venue for a romantic dinner in Puerto Princesa. The varied menu is based on high-quality local produce.."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/tiya_ising_food_1-300x205.jpg"
          title="Tiya Ising’s Filipino Restaurant"
          cText="Tiya Ising is a restaurant serving traditional Filipino comfort food. The interior is modern-retro style, filled with old photographs of Palawan, and antiques. Tiya Ising is the best place to go if you are looking for a restaurant that serves Filipino cuisine in Palawan."
        />
      </Row>
    </div>
  );
}

export default RestaurantComp;
