const express = require('express');
const app = express();
const router = express.Router();
const Product = require('../models/productModels');

router.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {}
});

router.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post('/addproduct', async (req, res) => {
    try {
      const products = await Product.create(req.body);
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  router.put('/product/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      // cannot find a product
      if (!product) {
        return res
          .status(404)
          .json({ message: `can't find product with id: ${id}` });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/product/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: `can't find product with id: ${id}` });
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
