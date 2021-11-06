import { Row } from "react-bootstrap";
import CompCard from "./CompCard";
import "./Comp.css";

function HotelsComp() {
  return (
    <div className="comp">
      <h1>HOTELS</h1>
      <Row className="style" xs={1} md={2} lg={3}>
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/21/28/21281356.jpeg"
          title="The Wellington Courtyard"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/27/62/2762974_v1.jpeg"
          title="Two Seasons Coron Island Resort"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/63/00/6300140.jpeg"
          title="Casa Kalaw"
          cText=""
        />
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
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/18/11/18112646.jpeg"
          title="Charlies El Nido"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/46/77/4677832.jpeg"
          title="Canvas Boutique"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/59/72/5972416_v2.jpeg"
          title="Munting Paraiso"
          cText=""
        />
      </Row>
    </div>
  );
}

export default HotelsComp;
