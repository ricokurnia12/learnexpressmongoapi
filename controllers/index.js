// const Product = require('../models/productModels.js');
const { findAllProducts } = require('../services');

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const allProduct = await findAllProducts();
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getProudctById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const products = await Product.create(req.body);
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  editProduct: async (req, res) => {
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
  },
  deleteProduct: async (req, res) => {
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
  },
};
