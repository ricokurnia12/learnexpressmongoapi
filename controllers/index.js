// const Product = require('../models/productModels.js');
const {
  findAllProducts,
  findProductById,
  addingProduct,
  editProductById,
  deleteProductById,
  pagination,
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
  getPagination: async (req, res) => {
    const ITEMS_PER_PAGE = 10;
    const setPagination = (page, size) => {
      const limit = size ? +size : ITEMS_PER_PAGE;
      const skip = page ? (page - 1) * limit : 0;

      return { limit, skip };
    };

    try {
      const { halaman, jumlahperhal } = req.query;
      const { limit, skip } = setPagination(
        parseInt(halaman),
        parseInt(jumlahperhal)
      );

      const allProduct = await pagination( limit, skip);
      res.status(200).json(allProduct);
    } catch (error) {}
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
    const { id } = req.params;
    try {
      const product = await editProductById(id, req.body, res);
      // if (!product) {
      //   return res
      //     .status(500)
      //     .json({
      //       message: `can't find from service product with id: ${id}`,
      //     });
      // }

      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json(`can't find from service product with id: ${id}`);
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
