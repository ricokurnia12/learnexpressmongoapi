const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifToken = (req, res, next) => {
  const token = req.header('auth-token');

  try {
    const verif = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verif;
    next();
  } catch (error) {
    res.status(400).json({
      message: 'Akses denied',
    });
  }
};

module.exports = verifToken;
