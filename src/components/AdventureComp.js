import CompCard from "./CompCard";

import { Row } from "react-bootstrap";
import "./AdventureComp.css";

function AdventureComp() {
  return (
    <Row className="style" xs={1} md={2} lg={3}>
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production87/d1048/4ed1a1e8-afa7-4640-b8ca-d1d6ccbb54c1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="El Nido Marine Reserve Park"
        cText="This Marine Reserve Park is popular for its limestone cliffs, 50 beaches, 3 major marine habitats, 5 types of forest, and an abundant fauna and flora including over 20 endemic species."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production186/d1028/ba049cf5-5294-4885-9917-905477b0af65.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="The Shipwrecks of Coron Bay"
        cText="The shipwrecks of Coron Bay are among the most visited dive sites in the Philippines. There are 12 war wrecks at the bottom of the ocean – the result of an attack on the Imperial Japanese Navy by US Navy aircraft during the Second World War. "
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production61/d1005/ad8b7e67-aa1b-48d8-83f2-6b8d80db0f19.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Calauit Safari Park"
        cText="Calauit Safari Park is a wildlife sanctuary that covers 37 sq km of Calauit Island, just north of Busuanga Island and Coron. Visiting the island, you have the chance of seeing the park’s waterbucks, deer, crocodiles, monkeys, zebras and other wildlife."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production189/d507/d42ce44e-991d-4643-950f-825e72a2be9d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Barracuda Lake"
        cText="Barracuda Lake is a spectacular site with emerald-green brackish waters surrounded by an impressive limestone karst formation. Located on the northwest coast of Coron Island, it offers not only a splendid place to visit, but also one of the most original dive sites in the region."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production80/d93/d6b62bfb-c5ef-4bd6-ae14-c04c9a0828da.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Tubbataha Reef National Park"
        cText="Tubbataha Reef National Park is a marine and bird sanctuary that covers a 97-sq-km area that includes 2 large atolls and the Jessie Beazley Reef. Located in the middle of the Sulu Sea, some 150 km southeast of Puerto Princesa, Tubbataha Reef is considered one of the best dive sites in the world."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production66/d822/6a964280-3b92-437b-884f-43fefb576a0a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Tabon Caves"
        cText="Tabon Caves are a group of over 200 caves. Only 29 of these caves have been explored, and several of them are open to the public. Called “Philippines' Cradle of Civilization”, the sites are the place where the oldest human bones – dating back 22,000 years - were found in the country."
      />
    </Row>
  );
}

export default AdventureComp;
