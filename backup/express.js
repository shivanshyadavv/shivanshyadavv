const express=require('express');
const app=express();
const router=express.Router();

app.get('/',function(req,res){
    // res.send("ram ram sara nu")
    res.sendFile(__dirname+"/demo.html");

})
app.get('/aboutus',function(req,res)
{
    // res.send("hn tujha sab jan na h ")
    res.sendFile(__dirname+"/home.html");

})

app.post('/aboutus',function(req,res){
    res.send("hum na jnta mera bhai kuch")
})


app.use('/',router);
app.listen(4900)