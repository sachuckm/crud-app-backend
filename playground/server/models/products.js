var {mongoose} = require('./../db/mongoose');


var Products = mongoose.model('Products', {
    code: {
        type:String,
        default: '0000',
        minlength: 1,
        trim :true
    },
    product: {
        type:String,
        default: 'Product1',
        minlength: 1,
        trim :true
    },
    stock: {
        type:Number,
        default: 0,
        minlength: 1,
        trim :true
    },
    expiry_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = {Products};
/*{
    id:5,
    code:6,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
}*/