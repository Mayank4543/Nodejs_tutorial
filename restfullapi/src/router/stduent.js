const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    console.log(user);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.listen(port, () => {
  console.log(`conccetion is setup at ${port}`);
});
//  you do not need express.json()and express.urlencoded() for get request or delete request. we only need it for post and put req.
// express.json() is a method inbuilt in express to recognixe the incoming
// Requets Object as a json object This method is called as amiddleware in your routerlication using the code :router.use(express.json())
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findBYId(_id);
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});
router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    } else {
      res.send(deleteStudent);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
router.patch("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatestudents = await Student.findByIdAndUpdate(id, req.body);
    res.send(updatestudents);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
