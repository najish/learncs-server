const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('learncs','root','Zafer1998@', {
    dialect:'mysql',
    host:'localhost',
    port:3306
},{
    freezeTableName:true,
    timestamps: false
});


sequelize.authenticate().then(() => console.log('connection is made')).catch(err => console.log(err));

module.exports = {sequelize}