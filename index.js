const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const dbconfig = require('./config/db');
const app = express();
const Routes = require('./routes/');
dotenv.config();

const { PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(Routes);
try {
  dbconfig();
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
