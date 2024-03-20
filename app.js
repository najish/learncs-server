require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const session = require('express-session');
const cors = require("cors");
const bodyParser = require('body-parser');
const pool = require('./public/js/db.js');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const studentRouter = require('./routers/studentRouter');
const customerRouter = require('./routers/customerRouter');
const testRouter = require('./routers/testRouter.js');
const personRouter = require('./routers/personRouter.js');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static("public"));
app.use(express.static("files"));
app.use(cors());
app.use('/students',studentRouter);
app.use('/customers',customerRouter);
app.use('/tests',testRouter);
app.use('/persons',personRouter);

app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:'SECRET'
}));

bodyParser.urlencoded({ extended: false })

app.post('/name', (req, res) =>  {
  var bodyData = req.body;
  console.log(req.body.name);
  res.json(bodyData);
});


app.get("/", (req, res) => {
  res.json("hello world");
});


app.get('/axios',(req,res) => {
  res.send("hello from axios");
})

app.get('/users',((req,res) => {
  pool.query('SELECT * FROM CUSTOMERS',(err,results) => {
    if(err) throw err;
    res.json(results);
  });
}));


app.post('/login',(req,res) => {
  res.json(req.body);
});

// app.post("/name", (req, res) => {
//   console.log(req.body.name);
//   res.send("post method");
// });

app.listen(port, () => {
  console.log(`server running at port : ${port}`);
});



/* PASSPORT SETUP */


const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());
