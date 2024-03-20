const express = require('express');
const personRouter = express.Router();
const dbConnection = require('../public/js/dbConnection.js');



personRouter.get('/',(req,res) => {
    res.send("Person : Get Method");
});


personRouter.get('/:id',(req,res) => {
    res.send(`Person : Get Method with Id : ${req.params.id}`);
});

personRouter.post('/',(req,res) => {
    res.send("Person: Post Method");
});


module.exports = personRouter;