var mongodb = require('mongodb');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://yadar008:222333a@ds135844.mlab.com:35844/mydb
mongoose.connect('mongodb://yadar008:222333a@ds135844.mlab.com:35844/mydb',{useNewUrlParser:true},(err,db)=>{
 
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected with Db');
    }
});

module.exports = {mongoose};