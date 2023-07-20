const Router = require('express').Router();
const productRoutes = require('./productRoutes');
const userRoutes = require('./UserRoutes');

Router.use('/product', productRoutes);
Router.use('/user', userRoutes);

module.exports = Router;
