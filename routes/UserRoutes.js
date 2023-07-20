const router = require('express').Router();

const {
  register,
  allUsers,
} = require('../controllers/userControllers.js');

router.post('/register', register);
router.get('/allusers', allUsers);

module.exports = router;
