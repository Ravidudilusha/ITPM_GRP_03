const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  Content: {
    type: String,
    required: true,
  },
  // User: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Category",
  // },
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
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
