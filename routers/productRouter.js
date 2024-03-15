const express = require('express');
const pool = require('../public/js/db.js');
const Product = require('../models/product.js');
const productRouter = express.Router();


// Method : Get (List of all product)
productRouter.get('/',(req,res) => {
    pool.query()

});


// Method : Get (Get a product with Id)
productRouter.get('/:id',(req,res) => {



});


// Method : Post (Create a resource in database)
productRouter.post('/',(req,res) => {



});









module.exports = productRouter;