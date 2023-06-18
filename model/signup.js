var mongoose= require('mongoose');
const bcrypt = require('bcryptjs')
var url="mongodb+srv://shivanshyadav822:duggu@cluster0.ainenr6.mongodb.net/bakery?retryWrites=true&w=majority";
mongoose.connect(url,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const userschema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone :{
        type:String,
        unique:true,
        required:true
    },
    message :{
        type:String,
        unique:true,
        required:true
    },
    password :{
        type:String,
        unique:true,
        required:true
    }


});

userschema.pre('save',async function(next)
{
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
    }
    next();
}
);

userschema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password))};

const usermodel = mongoose.model('user',userschema)

module.exports = usermodel