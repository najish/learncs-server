const express = require('express');
const studentRouter = express.Router();

studentRouter.get('/',(req,res) => {
    res.send("list of student : get method");
});


studentRouter.get("/:id",(req,res) => {
    const studentId = req.params.id;
    res.send(`Student Id : ${studentId}`);
});


studentRouter.post('/',(req,res) => {
    res.send("student post method");
});


module.exports = studentRouter;