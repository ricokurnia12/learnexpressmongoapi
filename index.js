const express = require('express');

const dotenv = require('dotenv');
const dbconfig = require('./config/db');
const app = express();
const Routes = require('./routes/');
const userRoutes = require('./routes/UserRoutes');
dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use(Routes);

dbconfig();
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
