const router = require('express').Router()
const hashpassword = require('../middleware/hashPassword')
const adminVerify = require('../middleware/adminVerification');
const adminController = require('../controllers/adminController');



router.post('/register',hashpassword,adminController.register)

router.post('/login',adminVerify,adminController.login)


module.exports = router