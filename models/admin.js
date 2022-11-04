const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')

const Schema = mongoose.Schema;

const adminSchema = new Schema({

    name: {
        type : String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    Mobile:{
        type: String,
        required:true
    },
    position:{
        type: String,
        required:true
    },


})
adminSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

adminSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};



const admin = mongoose.model("admin",adminSchema)

module.exports = admin;