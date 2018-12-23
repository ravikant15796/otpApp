var express = require('express');
var router = express.Router();
var {User} = require('../models/user');
//var {mongoose} = require('../db/dbconnection');
var express = require('express');
var bodyparser = require('body-parser');
var twilio = require('twilio');
var cors = require("cors");

router.get('/contacts',(req,res)=>{
    User.find().then((doc)=>{
     res.send(doc);
  },(err)=>{
      res.status(400).send();
  })
})

module.exports = router;