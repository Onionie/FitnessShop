const express = require('express');
const app = express();

const accessoriesProducts = require('./data/AccessoriesProducts.js');

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

app.listen(5000, console.log('Server is running on port 5000'));
