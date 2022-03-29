import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-5">
            {/* prettier-ignore */}
            eFitness |{' '}
            <a href="https://github.com/Onionie/eFitness">Oniel Gutierrez</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
