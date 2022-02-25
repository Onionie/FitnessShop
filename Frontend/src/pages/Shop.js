import { Row } from 'react-bootstrap';
import HomePageComponent from '../components/HomePageComponent';
import './pages.css';

function Shop() {
  return (
    <Row className="row">
      <HomePageComponent
        className="text-center"
        src="/images/shopPage/home_accessories.jpg"
        title="Accessories"
        link="/accessories"
      />
      <HomePageComponent
        className="text-center"
        src="/images/shopPage/home_equipment.jpg"
        title="Home Gym Equipment"
        link="/equipment"
      />
      <HomePageComponent
        className="text-center"
        src="/images/shopPage/home_supps.jpg"
        title="Supplements"
        link="/supplement"
      />
    </Row>
  );
}

export default Shop;
