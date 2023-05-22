const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  Content: {
    type: String,
    required: true,
  },
  Question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  //   User: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Question",
  //   },
  User: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

//customer table and path
const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;
