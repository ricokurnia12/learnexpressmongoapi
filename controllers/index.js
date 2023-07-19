// const Product = require('../models/productModels.js');
const {
  findAllProducts,
  findProductById,
  addingProduct,
  editProductById,
  deleteProductById,
} = require('../services');

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
      const product = await findProductById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const products = await addingProduct(req.body);
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await editProductById(id, req.body, res);

      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('cant find product');
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await deleteProductById(id);
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
