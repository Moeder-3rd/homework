const http = require("http");
const server = http.createServer();
server.on('request',function(req,res){  
  const url = req.url
  let content = ''
  if(url==='/login'){ 
    content = '登录页面'
  } else if(url==='/reg'){  
    content = '注册页面'
  } else {  
    content = '404 Not Found'
  }
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end(content)
})
server.listen(9000, () => {
  console.log("服务已经启动, 服务运行在 http://127.0.0.1 ,端口 9000 监听中...");
});
