const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const { MONGO_URL } = process.env;

const dbConfig = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      return console.log('Connected to mondodb!');
    })
    .catch((err) => console.log(err));
};

module.exports = dbConfig;
