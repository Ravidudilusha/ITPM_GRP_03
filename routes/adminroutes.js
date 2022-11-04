const express = require('express');
const { registeradmin, authadmin, adminProfile } = require('../controllers/adminController');

const router=express.Router()

router.post("/register",registeradmin);
router.post("/adminlogin",authadmin);
router.post("/adminProfile",adminProfile);


module.exports=router;