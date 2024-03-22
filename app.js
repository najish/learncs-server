require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const session = require('express-session');
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;


const customerRouter = require('./routes/customerRouter.js');





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static("public"));
app.use(express.static("files"));
app.use(cors());


// routes
app.use('/customers',customerRouter);

bodyParser.urlencoded({ extended: false })



app.get("/", (req, res) => {
  res.json("hello world");
});


app.listen(port, () => {
  console.log(`server running at port : ${port}`);
});






