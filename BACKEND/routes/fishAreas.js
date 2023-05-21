const router = require("express").Router();
const area = require("../models/Area");
let Area = require("../models/Area");

//insert data to database//

router.route("/add").post((req, res) => {
  const areaName = req.body.areaName;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  const newArea = new Area({
    areaName,
    description,
    imageUrl,
  });
  // pass created object to database//

  newArea
    .save()
    .then(() => {
      res.json("Fish Area Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//display inserted all data - get data//

router.route("/").get((req, res) => {
  Area.find()
    .then((areas) => {
      res.json(areas);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update data//

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { areaName, description, imageUrl } = req.body; // destructure//

  //create new object for update//
  const updateArea = {
    areaName,
    description,
    imageUrl,
  };

  const update = await Area.findByIdAndUpdate(userId, updateArea)
    .then(() => {
      res.status(200).send({ status: "Area Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//Delete data//

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Area.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Area Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Area", error: err.message });
    });
});

//Display inserted one data - get data//

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Area.findById(userId)
    .then((area) => {
      res.status(200).send({ status: "Area Fetched", area });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Area", error: err.message });
    });
});

module.exports = router;
