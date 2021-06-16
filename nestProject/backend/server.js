// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// import products from './data/products.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();
app.get('/', (req, res) => {
  res.send('nest api is running........');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
