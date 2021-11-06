import { Row } from "react-bootstrap";
import CompCard from "./CompCard";
import "./Comp.css";

function HotelsComp() {
  return (
    <div className="comp">
      <h1>HOTELS</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/10/991099.jpeg"
          title="Sangat Island Reserve"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/67/18/6718764.jpeg"
          title="Two Seasons Coron Town Bayside"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/60/65/6065768.jpeg"
          title="Hue S & Resorts Puerto Princesa"
          cText=""
        />
        {/* <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production186/d1028/ba049cf5-5294-4885-9917-905477b0af65.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="The Shipwrecks of Coron Bay"
        cText="The shipwrecks of Coron Bay are among the most visited dive sites in the Philippines. There are 12 war wrecks at the bottom of the ocean – the result of an attack on the Imperial Japanese Navy by US Navy aircraft during the Second World War. "
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
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production172/d612/505894bc-b3a5-410c-b257-6e9467bbcac0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Coron"
        cText="Coron boasts superb beaches, preserved nature, and stunning underwater scenery. Interesting historical artifacts – the sunken World War II vessels of a Japanese supply convoy – have propelled Coron to rank among the most sought-after diving destinations in the world."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production62/d1903/7962a59e-92c8-4cd6-9b3f-f1ce2f16a3d5.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="El Nido’s Small and Big Lagoons"
        cText="El Nido’s Small and Big Lagoons are both located next to each other on the northern coast of Miniloc Island. El Nido is famous for its limestone karst formations jutting from vivid turquoise waters, and these lagoons offer some of the best viewpoints in the Philippines."
      />
      <CompCard
        imgSrc="https://a.cdn-hotels.com/gdcs/production77/d719/5eb61328-dc7b-4c62-b9ec-27703f02d15e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
        title="Puerto Princesa Subterranean River"
        cText="Puerto Princesa Subterranean River National Park is a protected area located 80 km north of Palawan's capital city. It's one of the world’s most complex cave systems, covering 220 sq km and featuring 8 km of underground rivers. The site has a full mountain-to-sea ecosystem which contains bountiful fauna and flora."
      /> */}
      </Row>
    </div>
  );
}

export default HotelsComp;
