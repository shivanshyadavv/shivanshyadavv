var mongoose= require('mongoose');
var url="mongodb+srv://shivanshyadav822:duggu@cluster0.ainenr6.mongodb.net/bakery?retryWrites=true&w=majority";
mongoose.connect(url,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const userschema = mongoose.Schema({
    upload:{
        type:String,
        
        required:true
    },
    product_name :{
        type:String,
        
        required:true
    },
    product_price :{
        type:String,
        
        required:true
    },
    discount_offer :{
        type:String,
        
        required:true
    }
    

});

const usermodel1 = mongoose.model('add_product',userschema)

module.exports = usermodel1