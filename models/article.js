const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')

const Schema = mongoose.Schema;

const articleSchema = new Schema({

    topic: {
        type : String,
        required:true
    },
    description:{
        type: String,
        required:true,
    },

})
articleSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

articleSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


const Article = mongoose.model("Article", articleSchema)

module.exports = Article;