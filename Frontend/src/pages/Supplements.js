import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsPage from '../components/ProductsPage';
import supplementsProducts from '../data/SupplementsProducts';

const Supplement = () => {
  return (
    <Row>
      {supplementsProducts.map((product) => (
        <Col sm={12} md={6} lg={4} xl={4}>
          <ProductsPage product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Supplement;
