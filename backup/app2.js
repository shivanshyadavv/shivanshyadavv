// var http=require('http');
// http.createServer(function(req,res)
// {
//     res.write('<h3>hello form node</h3>');
//     res.end();
// }).listen(5200) 
// let hello=()=>console.log("hello arrow function");

// hello();
// let welcome=(name,mobile)=>
// {
//     return 'hello and welcome ${name},${mobile}';
// }
// console.log(welcome('ram',50));
var others=function(a,b)
{
    return a+b;
}
module.exports=others;