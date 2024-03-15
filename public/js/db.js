require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'Zafer1998@',
    database:'learncs',
    port:3306
});

module.exports = pool;