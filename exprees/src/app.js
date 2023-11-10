const path = require("path");
const express = require("express");
const app = express();
// console.log(__dirname);
// console.log(path.join());
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("hello from the express");
});
app.get("/about", (req, res) => {
  res.send("this ia an about page");
});
app.listen(8000, () => {
  console.log("listening  the port 8000");
});
