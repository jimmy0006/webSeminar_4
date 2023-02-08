const express = require('express');
const bodyParser = require('body-parser')
const morgan = require("morgan");

const app = express();

const user = require('./router/user');
const comment = require('./router/comment');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.use('/user',user);
app.use('/comment',comment)

app.listen(3000,()=>{
    console.log("listening on port : 3000")
})