console.log("Test");
const http =require('http');
//const port 3000;
const server=http.createServer(function(req,res){
    res.end("Node Server");
});
server.listen(3000,0.0.0.0,function() => {
    console.log("Server running on port 3000");
});
