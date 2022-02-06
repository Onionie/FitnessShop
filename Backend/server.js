const express = require('express');
const app = express();

const accessoriesProducts = require('./data/AccessoriesProducts.js');
const equipmentProducts = require('./data/EquipmentProducts.js');
const supplementProducts = require('./data/SupplementsProducts.js');

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

app.listen(5000, console.log('Server is running on port 5000'));
