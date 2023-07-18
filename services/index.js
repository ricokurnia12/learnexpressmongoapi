const Product = require('../models/productModels.js');

module.exports = {
  findAllProducts: async () => {
    try {
      const products = await Product.find();
      console.log(products, '>>> all product');

      return products;
    } catch (error) {
      throw error;
    }
  },
};
