const express=require('express');
const{ addarticle}=require('../controllers/userController');

const router=express.Router()

router.post("/",addarticle);


module.exports=router;

