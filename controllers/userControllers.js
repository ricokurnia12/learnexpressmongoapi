const {
  userRegister,
  getAllUser,
  userLogin,
} = require('../services/userServices.js');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

module.exports = {
  register: async (req, res) => {
    const { passWord, confPassword } = req.body;
    if (passWord !== confPassword)
      return res
        .status(400)
        .json({ message: 'Password doest match' });

    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(passWord, salt);
    console.log(hashpassword);

    try {
      const register = await userRegister({
        userName: req.body.userName,
        email: req.body.email,
        birthDay: req.body.birthDay,
        passWord: hashpassword,
      });
      res.status(200).json(register);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  userLogin: async (req, res) => {
    const { email, passWord } = req.body;
    try {
      const user = await userLogin({ email });
      console.log(user);
      const match = await bcrypt.compare(passWord, user[0].passWord);
      if (!match) {
        return res.status(400).json({ msg: 'Wrong Password' });
      }

      const token = jwt.sign(
        { _id: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.header('auth-token', token).json({
        token: token,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  allUsers: async (req, res) => {
    try {
      const allUsers = await getAllUser();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
