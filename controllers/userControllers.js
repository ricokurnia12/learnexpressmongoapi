const {userRegister} = require ('../services/userServices.js')

module.exports = {
  register: async (req, res) => {
    try {
      const register = await userRegister(req.body);
      res.status(200).json(register);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
