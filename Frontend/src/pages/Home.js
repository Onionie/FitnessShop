import { Col, Container, Image, Row } from 'react-bootstrap';
import './pages.css';

function Home() {
  return (
    <>
      <div className="background-banner">
        <Container className="row" style={{ marginTop: '0' }}>
          <Row>
            <Col className="header-text" md={12} lg={6}>
              Text about page
            </Col>
            <Col md={12} lg={6}>
              <Image
                src="./images/homePage/header-image.png"
                className="header-image"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h1>Something</h1>
      </Container>
    </>
  );
}

export default Home;
