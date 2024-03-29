const router = require('express').Router()
const ratingController = require('../controllers/ratingController')
const verifyUser = require('../middleware/verifyUser')
const Rating = require('../model/Rating')

router.post('/',verifyUser,ratingController.create)

router.get('/:id',verifyUser,ratingController.find)

module.exports = router