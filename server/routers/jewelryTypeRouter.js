const Router = require('express');
const router = new Router;
const checkRole = require('../middleware/checkRoleMiddleware')
const typeController = require('../controllers/typeController')

router.get('/', typeController.get)
router.post('/', checkRole('ADMIN'), typeController.create)

module.exports = router;