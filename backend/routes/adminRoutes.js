const express = require('express')
const {userdatails,userinfo,usernewinfo} = require("../controllers/userControllers")
const router = express.Router()


router.route('/').get(userdatails) 
router.route('/edituser/:userId').get(userinfo)
router.route('/editerUserDetails/:userid').patch(usernewinfo)
module.exports=router;