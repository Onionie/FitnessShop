import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';
import allProducts from './data/allProducts.js';

dotenv.config();
connectDB();
const app = express();

const accessoriesProducts = allProducts.filter(
  (p) => p.category === 'accessories'
);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/accessories', (req, res) => {
  res.json(accessoriesProducts);
});

// Shows specific product
app.get('/api/accessories/:id', (req, res) => {
  const accProduct = accessoriesProducts.find((p) => p._id === req.params.id);
  res.json(accProduct);
});

// Equipment Data
app.get('/api/equipment', (req, res) => {
  res.json(equipmentProducts);
});

app.get('/api/equipment/:id', (req, res) => {
  const eqqProduct = equipmentProducts.find((p) => p._id === req.params.id);
  res.json(eqqProduct);
});

// Supplement Data
app.get('/api/supplements', (req, res) => {
  res.json(supplementProducts);
});

// Shows specific supplement product
app.get('/api/supplements/:id', (req, res) => {
  const suppProduct = supplementProducts.find((p) => p._id === req.params.id);
  res.json(suppProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`.yellow.bold));
