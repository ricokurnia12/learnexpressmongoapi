const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json();
  try {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(403).json();
        req.id = decoded.id;
        console.log({ 'ini decoded': req.id });
        next();
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifToken;
