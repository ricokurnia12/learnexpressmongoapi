const {
  userRegister,
  getAllUser,
} = require('../services/userServices.js');

module.exports = {
  register: async (req, res) => {
    try {
      const register = await userRegister(req.body);
      res.status(200).json(register);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  allUsers: async (req, res) => {
    try {
      const allUsers = await getAllUser();
      res.status(200).json(allUsers);
    } catch (error) {
      throw error;
    }
  },
};
