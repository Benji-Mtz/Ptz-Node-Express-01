const express = require('express');
const ProductService = require('../services/product');

const router = express.Router();
const serviceProducts = new ProductService();



// /products
router.get('/', (req, res) => {
  const products = serviceProducts.find();
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send("Soy un filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = serviceProducts.findOne(id)
  res.json(product);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router;
