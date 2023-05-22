const router = require("express").Router();
const { request } = require("express");
let QuestionModel = require("../models/questionModel");

//add data to Question table
//./Question/add
//Post request
//http://localhost:8050/Question/add
router.route("/add").post((req, res) => {
  const Content = req.body.Content;
  const User = req.body.User;
  const createdAt = req.body.createdAt;

  const newQuestion = new QuestionModel({
    Content,
    User,
    createdAt,
  });

  newQuestion
    .save()
    .then(() => {
      res.json("Question Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//search Question
//http://localhost:8050/Question/
//Get Request
router.route("/").get((req, res) => {
  QuestionModel.find()
    .then((Question) => {
      res.json(Question);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update
//http://localhost:8090/Question/update/:id
//Put Request
router.route("/update/:id").put(async (req, res) => {
  let questionId = req.params.id;
  const { Content, User, createdAt } = req.body;
  const updatequestion = {
    Content,
    User,
    createdAt,
  };

  const update = await QuestionModel.findByIdAndUpdate(
    questionId,
    updatequestion
  )
    .then(() => {
      res.status(200).send({ status: "Question Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//delete Question
//http://localhost:8050/Question/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res) => {
  let questionId = req.params.id;

  await QuestionModel.findByIdAndDelete(questionId)
    .then(() => {
      res.status(200).send({ status: "Question deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//find one of the Question
router.route("/get/:id").get((req, res) => {
  let id = req.params.id;
  QuestionModel.findById(id)
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.log(err);
    });
});
//find one of the Question
router.route("/search/").post((req, res) => {
  let id = req.body.keyword;
  QuestionModel.find({Content:id})
    .then((question) => {
      console.log(question)
      res.json(question);
    })
    .catch((err) => {
      console.log(err);
    });
});
//Updateone
// router.route("/updateOne/:id").put(async (req, res) => {
//     let Question = await QuestionModel.findById(req.params.id);
//     const data = {
//         Name: req.body.Name || Question.Name,
//         Address: req.body.Address || Question.Address,
//         PhoneNumber: req.body.PhoneNumber || Question.PhoneNumber,
//         NICNumber: req.body.NICNumber || Question.NICNumber,
//         Jobtitle: req.body.Jobtitle || Question.Jobtitle,
//         Salary: req.body.Salary || Question.Salary,

//     };
//     Question = await QuestionModel.findByIdAndUpdate(req.params.id, data, { new: true });
//     res.json(Question);
// });

module.exports = router;
