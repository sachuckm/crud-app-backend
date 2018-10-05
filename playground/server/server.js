var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Products} = require('./models/products');

 
var app = express();

app.use(bodyParser());

/* code:6,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
*/
app.post('/products', (req, res)=>{
    let product = new Products({
        code:req.body.code,
        product:req.body.product,
        stock:req.body.stock,
        expiry_date:req.body.expiry_date,
        action:req.body.action
    })
    product.save().then ((doc) => {
        console.log(req.body);
        res.send(doc);
        //res.status(400).send(e);
    }, (e) => {
       res.status(400).send(e);
    })
console.log(req.body);
})
app.post('/products/:id', (req, res) => {
    console.log('*****************************'+req.params.id);
    var objId = req.params.id,
    product = {
        code : req.body.code,
        product : req.body.product,
        stock : req.body.stock,
        expiry_date : req.body.expiry_date,
        action : req.body.action
    }
    if (!ObjectID.isValid(objId)) {
         return res.status(404).send();
    }
   /* var product = Products.findById(id).then((res) => {
        return res;
    })
*/    console.log('##################product@@@@@@@@@'+JSON.stringify(product));

    Products.updateOne({_id:ObjectID(objId)},{$set: product}).then((doc) =>{
        //res.send(doc);
    })
})
app.delete('/products/:id', (req, res)=>{
    console.log('*****************************'+req.params.id);
    var objId = req.params.id;
    if (!ObjectID.isValid(objId)) {
         return res.status(404).send();
    }
   /* var product = Products.findById(id).then((res) => {
        return res;
    })
*/   // console.log('##################product@@@@@@@@@'+JSON.stringify(product));

    Products.deleteOne({_id:ObjectID(objId)}).then((doc) =>{
        res.send(doc);
    })
})
app.get('/products', (req, res) => {
    Products.find().then((result) => {
        console.log('Get method'+result);
        res.send({result})
    } , (e) => {
        res.status(400).send(e);
    })
})


app.listen(3002, ()=> {
    console.log('started server');
} )