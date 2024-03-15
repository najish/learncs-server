const express = require('express');
const testRouter = express.Router();

testRouter.get('/',(req,res) => {
    res.send("Method : get all");
});


testRouter.get('/:id',(req,res) => {
    res.send(`Method : Get, Id : ${req.params.id}`);
});



testRouter.post('/',(req,res) => {
    console.log(req.body.name);
    console.log(req.body.age);
    res.send("Method : post test data")
});

module.exports = testRouter;