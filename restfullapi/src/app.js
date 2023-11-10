const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req, res);
//   user.save().then(()=>{
//       res.status(201).send(user);
//   }).catch((e)=>{
//     res.status(400).send(e);
//   })

// })
// create a router
const router = new express.Router();
//  we need to define a router
router.get("/thapa", (req, res) => {
  res.send("hello watsaup guys");
});
app.use(router);
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    console.log(user);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.listen(port, () => {
  console.log(`conccetion is setup at ${port}`);
});
//  you do not need express.json()and express.urlencoded() for get request or delete request. we only need it for post and put req.
// express.json() is a method inbuilt in express to recognixe the incoming
// Requets Object as a json object This method is called as amiddleware in your application using the code :app.use(express.json())
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

app.get("/students/:id", async (req, res) => {
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
app.delete("/students/:id", async (req, res) => {
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
app.patch("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatestudents = await Student.findByIdAndUpdate(id, req.body);
    res.send(updatestudents);
  } catch (e) {
    res.status(400).send(e);
  }
});
