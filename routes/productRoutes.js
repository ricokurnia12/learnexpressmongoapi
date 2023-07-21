const router = require('express').Router();
const {
  getAllProduct,
  addProduct,
  getProudctById,
  editProduct,
  deleteProduct,
  getPagination,
} = require('../controllers/productControllers');
const addProductValidation = require('../middleware/addProductValidation.js');

router.get('/allproducts', getAllProduct);
router.get('/pagination', getPagination);

router.get('/:id', getProudctById);

router.post('/addproduct', addProductValidation, addProduct);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
