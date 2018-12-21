var {User} = require('./models/user');
var {mongoose} = require('./db/dbconnection');
var express = require('express');
var bodyparser = require('body-parser');
var twilio = require('twilio');
var cors = require("cors");
const port = process.env.PORT || 4000

var accountSid = 'AC4f743c19ce92cfac01d51a12993bb1a4'; 
var authToken = 'fdb88cbaeb75271f7beee1c0fd3b6a99';
var client = new twilio(accountSid, authToken);  


const Nexmo = require('nexmo')



var app = express();
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var contacts = [];

  app.get('/',(req,res)=>{
      res.send('Hi App is working Now');
  })

app.get('/contacts',(req,res)=>{
  User.find().then((doc)=>{
      res.send(doc);
  },(err)=>{
      res.status(400).send();
  })
})

app.post('/addcontact',(req,res)=>{
   var newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber
    });

    newUser.save().then((doc)=>{
        res.send(newUser);
    },(err)=>{
        res.status(400).send();
    })
    
});

app.get('/contacts/:id',(req,res)=>{
    var msg = 'Hi Your OTP is :' + Math.floor(1000 + Math.random() * 900000);
    client.messages.create({
        body: msg,
        to: '+919785948208',  
        from: '+18564548123' 
    }).then((message) => {
        res.send(client(message).fetch())
    });


    // const nexmo = new Nexmo({
    //     apiKey: 'e0aee796',
    //     apiSecret: 'MCjpp0jaL4mS5thC'
    //   })
      
    //   const from = 'Nexmo'
    //   const to = '919785948208'
    //  // const text = 'Hello from Nexmo'
      
    //   nexmo.message.sendSms(from, to, msg)

//   User.find({_id:req.params._id}, {$set:{message:msg}}).then((user)=>{
           
//   res.send(user);
//      });
  User.update({_id:req.params.id}, {$push:{
          message : msg
         }}).then((user)=>{
           
        res.send(user);
      });
})

app.use(cors());
app.use(bodyparser.json());


app.listen(port,(err,success)=>{
    if(err){
        console.log(`There is An Error on listening on ${port}`);
    }
    else{
        console.log(`running on ${port}`);
    }
})
