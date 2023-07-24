const router = require('express').Router();

const {
  register,
  allUsers,
  userLogin,
} = require('../controllers/userControllers.js');

router.post('/register', register);
router.post('/login', userLogin);
router.get('/allusers', allUsers);

module.exports = router;
