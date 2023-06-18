// var http=require('http');
// var inputs = `<h1>form</h1> <br> 
// <input type="text"/> <br>
// <input type="text"/>`;
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':"text/html"});
//     res.write('<h1>hello</h1>');
//     res.write('<input type="text"/>');
//     res.write(inputs);
//     res.end();
// }).listen(4200)
// var http=require('http');
// var fs=require('fs');
// http.createServer(function(req,res){
//     fs.readFile('demo.html',function(err,data){
//         res.writeHead(200,{'content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(2004)
var fs =require('fs');
fs.writeFile ('demo.html','write method',function(err){
    console.log('write method');
})

