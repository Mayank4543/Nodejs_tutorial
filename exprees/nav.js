const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("welcome to my home page");
});
app.get("/about", (req, res) => {
  res.send("welcome to my about page");
});
app.get("/contact", (req, res) => {
  //   res.send("welcome to my contact page");
  res.send([
    {
      id: 1,
      name: "mayank",
    },
    {
      id: 1,
      name: "Rathore",
    },
    {
      id: 1,
      name: "cndkchdi",
    },
  ]);
});
app.get("/temp", (req, res) => {
  res.send("welcome to my temp page");
});

app.listen(port, () => {
  console.log(`listening to the prt no ${port}`);
});
