const jwt= require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id},process.env.jWT_SECRET,{
        expiresIn:"30d",
    });
};

module.exports=generateToken;