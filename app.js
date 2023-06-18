const express=require('express');
const app=express();
const router=express.Router();
var cookieParser = require("cookie-parser");
var session = require("express-session");

const bodyParser=require('body-parser');
const mongoose = require("mongoose");
mongoose.set('strictQuery',false);
app.set('view engine','ejs');
app.use(express.static('imageso'));

app.use(express.static('views'));
 app.use(cookieParser());
 app.use(
    session({
        key: "user_id",
        secret: "ltdodty",
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires:500000,
        }
    })
    
 );

 app.use((req,res, next) =>{
    if (req.cookies.user_id && !req.session.user){
        res.clearCookie("user_id");
    }
    next();
 });

 var sessionChecker = (req, res, next)=> {
    if (req.session.user && req.cookies.user_id){
        res.redirect("/dashboard");
    }else{
        next();
    }
 }

let usermodel = require('./model/signup')
// let path=require('path');
// app.use(express.static(path.join(__dirname,'public')));

let usermodel1 = require('./model/add_product')

router.get('/',function(req,res){
    res.render('index');
})



router.get('/',function(req,res) {
    res.render('contact');
})

router.post('/signup',(req,res) => {
    var user = usermodel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,
        password:req.body.password,

    });

    // user.save((err,docs) => {
    //     if(err){
    //         res.redirect("/index");

    //     }
    //     else{
    //         console.log(docs);
    //         // res.redirect("/display");
            
    //     }
    // });
    user.save().then(()=>{
        console.log("saved data");
        res.redirect('/'); 
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/');
    })

});

router.post('/add_product',(req,res) => {
    var user = usermodel1({
        upload:req.body.upload,
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        discount_offer:req.body.discount_offer,
        

    });
    user.save().then(()=>{
        console.log("saved data");
        res.redirect('/'); 
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/');
    })

});
router.post('/login',async (req,res)=>{
    var email = req.body.email,
    password = req.body.password;

    try{
        var user = await usermodel.findOne({email:email})
        .exec();
        console.log(user);
        if(!user){
            res.redirect("/login");
        }
        user.comparePassword(password,(error, match) => {
            if(!match) {
              res.redirect("/login");
           }
       });

        req.session.user=user;
        res.redirect("./dashboard");
    }catch (error) {
        console.log(error)
    }
});

// router.get('/delete/:id', function(req,res){
//     usermodel.findByIdAndRemove(req.params.id, function(err){
//         if(err){
//             res.redirect('../display');
//         } else{
//             res.redirect('../display');
//         }
//     });
// });

router.get('/delete/:id',(req,res)=>{
    usermodel.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('../dashboard/view_register')
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('../dashboard/view_register')
    })
});

router.get('/edit/:id',(req,res)=>{
    usermodel.findById(req.params.id).then((data)=>{
        console.log(data)
        res.render('./dashboard/edit_signup',{data:data});
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard')
    })
});

router.post('/edit_signup/:id',(req,res)=>{
    var update = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,
        password:req.body.password,
    }
    usermodel.findByIdAndUpdate(req.params.id,update).then(()=>{
        res.redirect('../dashboard/view_register')
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard/dashboard')
    })

});





app.use(bodyParser.urlencoded({extended:true}));

router.get('/dashboard',function(req,res){
if (req.session.user && req.cookies.user_id){
    res.render("./dashboard/dashboard");
    // res.render('dashboard'); 
}
else{
    res.redirect("/");
}


})

router.get('/dashboard/add_proudct',function(req,res){
    res .render('./dashboard/add_product')
})

router.get('/dashboard/view_product',function(req,res){
    res.render('./dashboard/view_product')
})

router.get('/dashboard/view_register',function(req,res){
    // usermodel.find(function(err,data){
        // if(err){
        //     console.log(err);
        // }
        // else{
        //     res.render('dashboard',{data:data});
        //     console.log(data);
        // }
        usermodel.find().then((data)=>{
            res.render('./dashboard/view_register',{data:data})
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    });


app.use('/',router);
app.listen(4900)