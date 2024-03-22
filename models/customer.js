const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelize/database.js');

const CustomerModel = sequelize.define('customer',{
    id : {
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    phone: {
        type: DataTypes.BIGINT(10),
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});


CustomerModel.sync({alter:true});




class Customer {
    constructor(id,name,age,phone,email,address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    getId () {
        return this.id;
    }
    


    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }


    setAge(age) {
        this.age = age;
    }

    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }

    getEmail () {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getAddress() {
        return this.address;
    }

    setName(address) {
        this.address = address;
    }

}

module.exports = {Customer, CustomerModel};