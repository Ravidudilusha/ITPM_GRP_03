const asyncHandler=require('express-async-handler');
const Aricle = require('../models/article');
const article= require('../models/article');
const generateToken = require('../utils/generateToken');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const JWT_SECRET="ravidu1234"

const addarticle =asyncHandler(async(req,res)=>{
    const {topic,description}=req.body;
    
    
    const articleExists=await article.findOne({topic});

   
    if(articleExists){
        res.status(400)
        throw new Error("article Already Exists");
    }

    const Article=await article.create({
        topic,
        description,

        
    });

        if(article){
            res.status(201).json({
                _id:Article._id,
                topic:Article.topic,
                description:Article.description,
                token:generateToken(Article._id),
            });
        }else{
            res.status(400)
        throw new Error('Error occured!');
        }
});

// const authstaff =asyncHandler(async(req,res)=>{
//     const {email,password}=req.body;

//     const Staff=await staff.findOne({email});
//     if(!Staff){
//         return res.json({error:"staff not found"});
//     }
//     if(await bcrypt.compare(password,Staff.password)){
//         const token=jwt.sign({email:Staff.email},JWT_SECRET);

//         if(res.status(201)){
//             return res.json({status:"ok",data:token});
//         }else{
//             return res.json({error:"error"});
//         }
//     }
//     res.json({status:"error",error:"Invalid Password"});

// });

// const Profile=asyncHandler(async(req,res)=>{
//     const {token}=req.body;
//     try {
//         const user=jwt.verify(token,JWT_SECRET);
//         console.log(user);
//         const useremail=user.email;
//         staff.findOne({email:useremail})
//         .then((data)=>{
//             res.send({status:"ok",data:data});
//         }).catch((error)=>{
//             res.send({status:"ok",data:data});
//         });
//     } catch (error) {
        
//     }
// });


module.exports={addarticle};