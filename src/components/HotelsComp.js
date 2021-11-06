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
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/28/04/2804512_v1.jpeg"
          title="Hotel Busuanga Bay Lodge"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/23/79/2379608.jpeg"
          title="Holiday Suites"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/26/72/2672628.jpeg"
          title="Coron Westown Resort"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/64/1264945.jpeg"
          title="Asturias"
          cText=""
        />
        <CompCard
          imgSrc="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/28/18/2818641_v1.jpeg"
          title="Hotel Aziza Paradise"
          cText=""
        />
      </Row>
    </div>
  );
}

export default HotelsComp;
