const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    name: {
        type : String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true,

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
staffSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

staffSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const Staff = mongoose.model("Staff",staffSchema)

module.exports = Staff;