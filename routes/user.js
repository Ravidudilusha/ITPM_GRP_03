const express=require('express');
const{ registerstaff, authstaff,Profile}=require('../controllers/userController');

const router=express.Router()

router.post("/",registerstaff);
router.post("/login",authstaff);
router.post("/Profile",Profile);


module.exports=router;

