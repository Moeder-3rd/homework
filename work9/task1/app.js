const fs = require('fs')
fs.readFile('./test.txt','utf8',function(err,data){    
    if(err){    
        console.log(err);
    } else {    
        console.log(data);
    }
    fs.writeFile('./test-copy.txt',`${data}`,(err)=>{    
        if(err){    
            console.log('运行失败');
        }else { 
            console.log('运行成功');
        }
    })
})