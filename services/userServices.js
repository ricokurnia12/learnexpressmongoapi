const { userModels } = require('../models/index');

module.exports = {
  getAllUser: async () => {
    try {
      return await userModels.find();
    } catch (error) {
      throw error;
    }
  },
  userRegister: async (body) => {
    try {
      return await userModels.create(body);
    } catch (error) {
      throw error;
    }
  },

  userLogin: async (body) => {
    try {
      return await userModels.find(body).exec();
    } catch (error) {
      throw error;
    }
  },
};
