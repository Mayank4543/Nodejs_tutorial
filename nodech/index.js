const fs = require("fs");
fs.mkdirSync("thapa");
fs.writeFileSync("thapa/bio.txt", "my name is mayank");
// fs.appendFileSync("thapa/bio.txt", "i like ut");
// const data = fs.readFileSync("thapa/bio.txt", "utf-8");

// console.log(data);

// fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");
// fs.unlinkSync("thapa/mybio.txt"); this is for delete path
