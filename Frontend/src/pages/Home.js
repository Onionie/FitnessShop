import { Row } from 'react-bootstrap';
import HomePageComponent from '../components/HomePageComponent';
import './pages.css';
function Home() {
  return (
    <Row className="row">
      <HomePageComponent
        className="text-center"
        src="/images/homePage/home_accessories.jpg"
        title="Accessories"
        link="/accessories"
      />
      <HomePageComponent
        className="text-center"
        src="/images/homePage/home_equipment.jpg"
        title="Home Gym Equipment"
        link="/equipment"
      />
      <HomePageComponent
        className="text-center"
        src="/images/homePage/home_supps.jpg"
        title="Supplements"
        link="/supplements"
      />
    </Row>
  );
}

export default Home;
