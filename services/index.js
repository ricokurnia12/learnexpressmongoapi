const Product = require('../models/productModels.js');

module.exports = {
  findAllProducts: async () => {
    try {
      return await Product.find();
    } catch (error) {
      throw error;
    }
  },
  pagination: async (limit, skip) => {
    const products = await Product.find()
      .limit(limit)
      .skip(skip)
      .exec();
    return products;
  },
  findProductById: async (id) => {
    try {
      return await Product.findById(id);
    } catch (error) {
      throw error;
    }
  },
  addingProduct: async (body) => {
    try {
      return await Product.create(body);
    } catch (error) {
      throw error;
    }
  },
  editProductById: async (id, body, res) => {
    try {
      const product = await Product.findByIdAndUpdate(id, body, {
        new: true,
      });
      // cannot find a product
      // if (!product) {
      //   return res
      //     .status(500)
      //     .json({ message: `can't find from service product with id: ${id}` });
      // }
      // const updatedProduct = await Product.findById(id);
      // res.status(200).json(updatedProduct);
      return product;
    } catch (error) {
      throw error;
    }
  },
  deleteProductById: async (id) => {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  },
};
