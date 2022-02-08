import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';
import allProducts from './data/allProducts.js';
import productRoutes from './routing/productRouting.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

// const accessoriesProducts = allProducts.filter(
//   (p) => p.category === 'accessories'
// );

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

// Shows specific product
// app.get('/api/accessories/:id', (req, res) => {
//   const accProduct = accessoriesProducts.find((p) => p._id === req.params.id);
//   res.json(accProduct);
// });

// Throw Errors when accessing invalid routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`.yellow.bold));
