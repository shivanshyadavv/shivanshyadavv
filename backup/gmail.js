var nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
    service: 'gmail',
    // host:'smtp.gmail.com',
    // port:587,
    // secure:false,
    // requireTLS:true,
    auth:{
        user:'shivanshyadav822@gmail.com',
        pass:'cluvccwissprqgdr'
    }
});
var mailOptions = {
    from:'shivanshyadav822@gmail.com',
    to:'prvn729@gmail.com',
    subject:'node mail',
    text:"hello node"
}
transport.sendMail(mailOptions,function(error,info)
{
    if(error)
    {
        console.warn(error);
    }
    else{
        console.warn('email has been send',info.response);
    }
});


