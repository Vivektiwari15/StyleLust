const router = require('express').Router()
const feedbackController = require('../controllers/feedbackController')

router.post('/',feedbackController.create)
router.get('/',feedbackController.find)
router.delete('/',feedbackController.delete)

module.exports = router