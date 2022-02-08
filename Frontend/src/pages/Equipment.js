import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsPage from '../components/ProductsPage';
//import equipmentProducts from '../data/EquipmentProducts';
import axios from 'axios';

const Equipment = () => {
  const [equipmentProducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      const newEquipments = data.filter((p) => p.category === 'equipment');

      setProducts(newEquipments);
    };

    fetchProducts();
  }, []);
  return (
    <Row>
      {equipmentProducts.map((product) => (
        <Col sm={12} md={6} lg={4} xl={4} key={product._id}>
          <ProductsPage product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Equipment;
