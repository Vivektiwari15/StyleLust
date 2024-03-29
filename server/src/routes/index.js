const router = require('express').Router()

router.use('/auth',require('./authentication'))
router.use('/carousel',require('./carousel'))
router.use('/outfit',require('./outfit'))
router.use('/rating',require('./rating'))
router.use('/feedback',require('./feedback'))
router.use('/user',require('./user'))
router.use('/admin',require('./admin'))
router.use('/superadmin',require('./superadmin'))


module.exports = router