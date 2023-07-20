const { User } = require('../models/index');

module.exports = {
  userRegister: async (body) => {
    try {
      return await User.create(body);
    } catch (error) {
      throw error;
    }
  },
};
