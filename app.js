console.log("Test");
const http =require('http');
//const port 3000;
const server=http.createServer(function(req,res){
    res.end("Node Server");
}).listen(80);
