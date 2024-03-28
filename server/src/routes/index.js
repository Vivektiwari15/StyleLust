const router = require('express').Router()

router.use('/auth',require('./authentication'))
router.use('/carousel',require('./carousel'))


module.exports = router