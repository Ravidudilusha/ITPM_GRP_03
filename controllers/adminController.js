const asyncHandler=require('express-async-handler')
const admin=require('../models/admin')
const generateToken = require('../utils/generateToken');
const bcrypt=require("bcryptjs");
const JWT_SECRET="ravidu1234"
const jwt=require("jsonwebtoken");


const registeradmin=asyncHandler(async(req,res)=>{
    const {name,email,password,Mobile,position}=req.body;

    const adminExists=await admin.findOne({email});
   
    if(adminExists){
        res.status(400)
        throw new Error("admin Already Exists");
    }

    const Admin=await admin.create({
        name,
        email,
        password,
        Mobile,
        position,
    });

        if(admin){
            res.status(201).json({
                _id:Admin._id,
                name:Admin.name,
                email:Admin.email,
                password:Admin.password,
                Mobile:Admin.Mobile,
                position:Admin.position,
                token:generateToken(Admin._id),
            });
        }else{
            res.status(400)
        throw new Error('Error occured!');
        }
});
const authadmin =asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    const Admin=await admin.findOne({email});
    if(!Admin){
        return res.json({error:"admin not found"});
    }
    if(await bcrypt.compare(password,Admin.password)){
        const token=jwt.sign({email:Admin.email},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error",error:"Invalid Password"});

});

const adminProfile=asyncHandler(async(req,res)=>{
    const {token}=req.body;
    try {
        const admin=jwt.verify(token,JWT_SECRET);
        console.log(admin);
        const adminemail=admin.email;
        admin.findOne({email:adminemail})
        .then((data)=>{
            res.send({status:"ok",data:data});
        }).catch((error)=>{
            res.send({status:"ok",data:data});
        });
    } catch (error) {
        
    }
});

module.exports={registeradmin,authadmin,adminProfile}