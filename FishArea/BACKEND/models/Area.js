const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fishAreaSchema = new Schema({
    areaName : {
        type : String,
        required: true     //Backend validation//
    },
    description : {
        type : String,
        required: true
    },
    imageUrl : {
        type : String,
        required: true
    },
})

const area = mongoose.model("Fish Area",fishAreaSchema);

module.exports = area;