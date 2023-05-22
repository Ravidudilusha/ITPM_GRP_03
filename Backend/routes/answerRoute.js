const router = require("express").Router();
const { request } = require("express");
let AnswerModel = require("../models/answerModel");

//add data to Answer table
//./Answer/add
//Post request
//http://localhost:8050/Answer/add
router.route("/add").post((req, res) => {
  const Content = req.body.Content;
  const Question = req.body.Question;
  const User = req.body.User;
  const createdAt = req.body.createdAt;

  const newAnswer = new AnswerModel({
    Content,
    Question,
    User,
    createdAt,
  });

  newAnswer
    .save()
    .then(() => {
      res.json("Answer Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//search Answer
//http://localhost:8050/Answer/
//Get Request

router.route("/").get((req, res) => {
  AnswerModel.find().populate("Question")
    .then((Answer) => {
      res.json(Answer);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update
//http://localhost:8090/Answer/update/:id
//Put Request
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { Content, Question, User, createdAt } = req.body;
  const updateUser = {
    Content,
    Question,
    User,
    createdAt,
  };

  const update = await AnswerModel.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      res.status(200).send({ status: "Answer Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//delete Answer
//http://localhost:8050/Answer/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await AnswerModel.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Answer deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//find one of the Answer
router.route("/get/:id").get((req, res) => {
  let id = req.params.id;
  AnswerModel.findById(id)
    .then((answer) => {
      res.json(answer);
    })
    .catch((err) => {
      console.log(err);
    });
});





module.exports = router;
