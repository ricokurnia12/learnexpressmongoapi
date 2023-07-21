const { productModels } = require('../models');

module.exports = {
  findAllProducts: async () => {
    try {
      return await productModels.find();
    } catch (error) {
      throw error;
    }
  },
  pagination: async (limit, skip) => {
    const products = await productModels
      .find()
      .limit(limit)
      .skip(skip)
      .exec();
    return products;
  },
  findProductById: async (id) => {
    try {
      return await productModels.findById(id).populate('id_user');
    } catch (error) {
      throw error;
    }
  },
  addingProduct: async (body) => {
    try {
      return await productModels.create(body);
    } catch (error) {
      throw error;
    }
  },

  editProductById: async (id, body, res) => {
    try {
      const product = await productModels.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

      return product;
    } catch (error) {
      throw error;
    }
  },
  deleteProductById: async (id) => {
    try {
      return await productModels.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  },
};
