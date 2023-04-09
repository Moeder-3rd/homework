const { log } = require("console");
const fs = require("fs");
fs.rename("./01.txt", "./01-modify.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("重命名成功");
  }
});
