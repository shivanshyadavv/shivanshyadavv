const mongoose=require('mongoose');

var url=mongoose.connect("mongodb+srv://shivanshyadav822:duggu@cluster0.ainenr6.mongodb.net/?retryWrites=true&w=majority",

{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>console.log("connection succesfully.."))
.catch((err)=>console.log(err));

module.exports=url;
