const { Router } = require('express');
const { route } = require('express/lib/application');
const authController  = require('../controllers/authController')
const router = Router()



// router.get('/signup', authController.signup_get)
// router.post('/signup', authController.signup_post)
// router.get('/login',authController.login_get)
// router.post('/login', authController.login_post)
router.post('/mail', authController.mail_post)

module.exports = router