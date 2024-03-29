const dataController = require('../controllers/dataController')

const router = require('express').Router()


router.get('/',dataController.find)
router.delete('/',dataController.find)


module.exports = router