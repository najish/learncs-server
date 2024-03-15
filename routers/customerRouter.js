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
    });
    pool.end();
});


customerRouter.post("/",(req,res) => {
    var customer = req.body;
    pool.getConnection();
    pool.query('INSERT INTO CUSTOMERS SET ?',customer,(error,results) => {
        if(error) throw error;
    });
    res.send("customer added");
});


module.exports = customerRouter;
