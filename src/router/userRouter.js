const { Router } = require('express');

const router = Router();
const { getAllUsers } = require('../controllers/user.controller');

router.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.json(users);
});

router.post('/', async (req, res) => {
  res.send('POST');
});

module.exports = router;
