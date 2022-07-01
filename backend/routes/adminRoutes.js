const express = require('express')
const {userdatails,userinfo,usernewinfo,deleteUser} = require("../controllers/userControllers")
const router = express.Router()
// const {search} = require("../controllers/userControllers")


router.route('/').get(userdatails) 
router.route('/edituser/:userId').get(userinfo)
router.route('/editerUserDetails/:userid').patch(usernewinfo)
router.route('/deleteUser').delete(deleteUser);
// router.route('/search').delete(search);

module.exports=router;