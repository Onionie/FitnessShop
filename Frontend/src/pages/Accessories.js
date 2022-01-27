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
        src="/images/homePage/home_clothing.jpg"
        title="Clothing"
        link="/clothing"
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
