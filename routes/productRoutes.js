const router = require('express').Router();
const {
  getAllProduct,
  addProduct,
  getProudctById,
  editProduct,
  deleteProduct,
  getPagination
} = require('../controllers/productControllers');


router.get('/allproducts', getAllProduct);
router.get('/pagination', getPagination)

router.get('/:id', getProudctById);

router.post('/addproduct', addProduct);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);


module.exports = router;
