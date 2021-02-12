const Router = require('express');
const router = new Router;
const checkRole = require('../middleware/checkRoleMiddleware')
const jewelryController = require('../controllers/jewelryController')

router.get('/', jewelryController.getAll)
router.get('/:id', jewelryController.getOne)
router.post('/',  jewelryController.create)

module.exports = router;

// checkRole('ADMIN'),