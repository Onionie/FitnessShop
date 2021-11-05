import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./AdventureComp.css";

function AdventureComp() {
  return (
    <Row className="style" xs={1} md={2} lg={3}>
      <CompCard
        bsVariant="top"
        imgSrc="https://a.cdn-hotels.com/gdcs/production87/d1048/4ed1a1e8-afa7-4640-b8ca-d1d6ccbb54c1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="El Nido Marine Reserve Park"
        cText="This Marine Reserve Park is popular for its limestone cliffs, 50 beaches, 3 major marine habitats, 5 types of forest, and an abundant fauna and flora including over 20 endemic species."
      />
      <CompCard
        bsVariant="top"
        imgSrc="https://a.cdn-hotels.com/gdcs/production186/d1028/ba049cf5-5294-4885-9917-905477b0af65.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="The Shipwrecks of Coron Bay"
        cText="The shipwrecks of Coron Bay are among the most visited dive sites in the Philippines. There are 12 war wrecks at the bottom of the ocean – the result of an attack on the Imperial Japanese Navy by US Navy aircraft during the Second World War. "
      />{" "}
      <CompCard
        bsVariant="top"
        imgSrc="https://a.cdn-hotels.com/gdcs/production61/d1005/ad8b7e67-aa1b-48d8-83f2-6b8d80db0f19.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Calauit Safari Park"
        cText="Calauit Safari Park is a wildlife sanctuary that covers 37 sq km of Calauit Island, just north of Busuanga Island and Coron. Visiting the island, you have the chance of seeing the park’s waterbucks, deer, crocodiles, monkeys, zebras and other wildlife."
      />
    </Row>
  );
}

export default AdventureComp;
