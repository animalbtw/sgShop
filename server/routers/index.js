const Router = require('express');
const router = new Router();
const jewelryRouter = require('./jewelryRouter');
const jewelryTypeRouter = require('./jewelryTypeRouter');
const userRouter = require('./userRouter');

router.use('/type', jewelryTypeRouter);
router.use('/jewelry', jewelryRouter);
router.use('/user', userRouter);

module.exports = router;