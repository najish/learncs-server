const express = require('express');
const pool = require('../public/js/db.js');
const Customer = require('../models/customer.js');
const customerRouter = express.Router();


customerRouter.get('/',(req,res) => {
  pool.query('SELECT * FROM CUSTOMERS',((error,customers) => {
        if(error) throw error;
        res.json(customers);
    }));
});  


customerRouter.get("/:id",(req,res) => {
    var customerId = req.params.id;
    pool.query(`select * from customers where id = ${customerId}`,(error,customer) => {
        if(error) throw error;
        res.json(customer)
    })
});


customerRouter.post("/",(req,res) => {
    console.log(req.body.CustomerName);
    console.log(req.body.Email);
    console.log(req.body.Phone);
    console.log(req.body.Address);
    res.send("CustomerName");
});

module.exports = customerRouter;