const router = require('express').Router()
const superAdminController = require('../controllers/superAdminController')
const hashpassword = require('../middleware/hashPassword')


router.post('/signup',hashpassword,superAdminController.signup)

router.post('/verify',superAdminController.verify)

router.post('/login',superAdminController.login)


module.exports = router