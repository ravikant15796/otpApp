var express = require('express');
var app = express();

app.use((req,res,next)=>{
   console.log('I am Middle');
   next();
    
})
app.get('/',(req,res,next)=>{
    res.send('He');
})

app.listen(3000);