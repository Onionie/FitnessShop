import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsPage from '../components/ProductsPage';
import equipmentProducts from '../data/EquipmentProducts';

const Equipment = () => {
  return (
    <Row>
      {equipmentProducts.map((product) => (
        <Col sm={12} md={6} lg={4} xl={4}>
          <ProductsPage product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Equipment;
