const router = require('express').Router();
const {
  getAllProduct,
  addProduct,
  getProudctById,
  editProduct,
  deleteProduct,
  getPagination
} = require('../controllers');


router.get('/allproducts', getAllProduct);
router.get('/pagination', getPagination)

router.get('/product/:id', getProudctById);

router.post('/addproduct', addProduct);

router.put('/product/:id', editProduct);

router.delete('/product/:id', deleteProduct);

module.exports = router;
