const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", function (reg, res) {
  fs.readFile("./table.html", "utf8", function (err, dataStr) {
    if (err) {
      return console.log("读取失败！" + err.message);
    }
    console.log("读取成功!" + dataStr);
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(dataStr)
  });  
});
server.listen(9000, () => {
  console.log("服务已经启动, 服务运行在 http://127.0.0.1:9000 ,端口 9000 监听中...");
});
