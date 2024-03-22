const { where } = require('sequelize');
const {Customer, CustomerModel} = require('../models/customer.js');

const getCustomers = async (req,res) => {
    const customers = await CustomerModel.findAll();
    res.json(customers);
}


const getCustomerId = async (req,res) => {
    const customer = await CustomerModel.findByPk(req.params.id);
    res.json(customer);
}

const addCustomer = async (req,res) => {
    const data = req.body;
    console.log(data);
    const customer = await CustomerModel.create(data);
    res.json(customer);
}


const updateCustomer = async (req,res) => {
    const data = req.body;
    const customer = CustomerModel.findByPk(req.params.id);
    CustomerModel.update(data,{
        where: {
            id: req.params.id
        }
    });
    res.send('customer updated');
}

module.exports = {
    getCustomers,
    getCustomerId,
    addCustomer,
    updateCustomer
}