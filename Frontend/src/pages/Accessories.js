import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsPage from '../components/ProductsPage';
import axios from 'axios';

const HomeScreen = () => {
  const [accessoriesProducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      const newAccessories = data.filter((p) => p.category === 'accessories');

      setProducts(newAccessories);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {accessoriesProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={4} key={product._id}>
            <ProductsPage product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
