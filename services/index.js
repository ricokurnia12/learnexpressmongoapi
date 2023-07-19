const Product = require('../models/productModels.js');

module.exports = {
  findAllProducts: async () => {
    try {
      return await Product.find();
    } catch (error) {
      throw error;
    }
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
       await Product.findByIdAndUpdate(id, body);
      // cannot find a product
      // if (!product) {
      //   return res
      //     .status(500)
      //     .json({ message: `can't find product with id: ${id}` });
      // }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      throw error;
    }
  },
  deleteProductById :  async (id) =>{
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      throw error
    }
  }

};
