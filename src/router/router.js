const userRouter = require('./userRouter');

const { Router } = require('express');

const router = Router();

router.use('/', userRouter);

module.exports = router;
