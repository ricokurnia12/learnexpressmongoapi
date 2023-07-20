const { Product, User } = require('../models');

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
