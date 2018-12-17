var mongodb = require('mongodb');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ContactApp', {useNewUrlParser:true},(err,db)=>{
 
    if(err){
        console.log('Error in db connection');
    }
    else{
        console.log('Connected with Db');
    }
});

module.exports = {mongoose};