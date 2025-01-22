const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()} : ${req.url}  New request received\n` ;
    // const log = $(Date.now())
  fs.appendFile('log.txt',log, (err,data) =>{
    switch(req.url){
        case '/' : res.end("Home");
        break;
        case '/about': res.end("I am Zannat");
        break;
        default:
            res.end("404 not found");
    }
  });
    
});


myServer.listen(8000, () => console.log("server start!!"));





// const port = 1234;
// myServer.listen(port);