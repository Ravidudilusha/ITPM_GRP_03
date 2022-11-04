const asyncHandler=require('express-async-handler');
const Staff = require('../models/staff');
const staff=require('../models/staff');
const generateToken = require('../utils/generateToken');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const JWT_SECRET="ravidu1234"

const registerstaff =asyncHandler(async(req,res)=>{
    const {name,email,password,Mobile,position}=req.body;
    
    
    const userExists=await staff.findOne({email});

   
    if(userExists){
        res.status(400)
        throw new Error("user Already Exists");
    }

    const Staff=await staff.create({
        name,
        email,
        password,
        Mobile,
        position,
    });

        if(staff){
            res.status(201).json({
                _id:Staff._id,
                name:Staff.name,
                email:Staff.email,
                password:Staff.password,
                Mobile:Staff.Mobile,
                position:Staff.position,
                token:generateToken(Staff._id),
            });
        }else{
            res.status(400)
        throw new Error('Error occured!');
        }
});

const authstaff =asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    const Staff=await staff.findOne({email});
    if(!Staff){
        return res.json({error:"staff not found"});
    }
    if(await bcrypt.compare(password,Staff.password)){
        const token=jwt.sign({email:Staff.email},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error",error:"Invalid Password"});

});

const Profile=asyncHandler(async(req,res)=>{
    const {token}=req.body;
    try {
        const user=jwt.verify(token,JWT_SECRET);
        console.log(user);
        const useremail=user.email;
        staff.findOne({email:useremail})
        .then((data)=>{
            res.send({status:"ok",data:data});
        }).catch((error)=>{
            res.send({status:"ok",data:data});
        });
    } catch (error) {
        
    }
});


module.exports={registerstaff,authstaff,Profile};