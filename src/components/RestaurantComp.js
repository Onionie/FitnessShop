import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./Comp.css";

function RestaurantComp() {
  return (
    <div className="comp">
      <h1>RESTAURANTS</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/09/ka-lui-restaurant-300x205.jpg"
          title="Kalui Restaurant"
          cText="KaLui is a native-style restaurant popular with tourists and locals for its fresh and affordable seafood. It’s the most famous restaurant in Puerto Princesa.  Fresh catch of the day, includes sashimi, tempura, shellfish soup, baked mussel and much more."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/La_terrace_Palawan_rest-300x205.jpg"
          title="La Terrasse Restaurant"
          cText="A stylish restaurant in Puerto Princesa that serves amazing dishes made with fresh and organic ingredients. La Terrace Restaurant is the ideal venue for a romantic dinner in Puerto Princesa. The varied menu is based on high-quality local produce."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/kinabuch-grill-and-bar-300x205.jpg"
          title="Kinabuchs Grill and Bar"
          cText="Kinabuch Bar and Grill is one of the most popular restaurants in Puerto Princesa with a wide selection of local, international and exotic food."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/09/ka-joel-inato-300x205.jpg"
          title="Ka Joel’s Inato Restaurant"
          cText="Another native-style restaurant with a great variety of food choice from poultry, beef, pork, and seafood. Ka Inato Restaurant serves delicious Filipino and native food at an affordable price. The most popular are the grilled chicken leg served with steamed rice."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/09/puerto-vista-restaurant-romatic-dinner-300x205.jpg"
          title="Puerto Vista Restaurant"
          cText="The only restaurant in Puerto Princesa which offers Wagyu Beef. Wagyu cattle is known worldwide for its marbling characteristics and naturally enhanced flavor, tenderness, and juiciness. Puerto Vista also caters delicious French-Spanish and Moroccan cuisines. "
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/09/haim-chicken-inato-300x205.jpg"
          title="Haim Chicken Inato Restaurant"
          cText="Offers more than just chicken! It has an extensive menu to satisfy every other kind of craving. The bestseller is, of course, chicken, grilled to perfection. Those who have tried it would attest that it’s grilled chicken like no other, especially when paired with rice, which is essential in a common Filipino meal."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/pizza_is-300x205.jpg"
          title="Mc Coy’s Pizza House Restaurant"
          cText="If you’re craving for Italian food in Puerto Princesa then there is no better place to go then McCoy’s Pizza House. It’s one of the most popular restaurants among locals in Puerto Princesa with great food and live music."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/badjao_food-300x205.jpg"
          title="Badjao Seafront Restaurant"
          cText="The Badjao Seafront is a restaurant built on stilts above the clear waters and surrounded by a mangrove forest overlooking the ocean. Badjao’s sea and mountain views are truly mesmerizing. The Badjao Seafront Restaurant serves a variety of seafood and Filipino dishes."
        />
        <CompCard
          imgSrc="https://www.travel-palawan.com/wp-content/uploads/2018/02/tiya_ising_food_1-300x205.jpg"
          title="Tiya Ising’s Filipino Restaurant"
          cText="Tiya Ising is a restaurant serving traditional Filipino comfort food. Tiya Ising is the best place to go if you are looking for a restaurant that serves Filipino cuisine in Palawan."
        />
      </Row>
    </div>
  );
}

export default RestaurantComp;
