const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const router = require('./routes');
dotenv.config();
// const port = process.env.PORT
// const mongourl = process.env.MONGO_URL
const { PORT, MONGO_URL } = process.env;

app.use(express.json());

app.use(router);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });

    console.log('Connected ro mondodb!');
  })

  .catch((err) => console.log(err));
