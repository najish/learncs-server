const express = require('express');
const customerRouter = express.Router();
const {getCustomers , getCustomerId, addCustomer, updateCustomer} = require('../controllers/customerController.js');


customerRouter.get('/',getCustomers); 
customerRouter.get('/:id',getCustomerId);
customerRouter.post('/',addCustomer);
customerRouter.put('/:id',updateCustomer);


module.exports = customerRouter;