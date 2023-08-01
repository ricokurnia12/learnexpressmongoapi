const router = require('express').Router();
const verifToken = require('../middleware/verifyToken');

const {
  register,
  allUsers,
  login,
} = require('../controllers/userControllers.js');

router.post('/register', register);
router.post('/login', login);
router.get('/allusers',verifToken, allUsers);

module.exports = router;
