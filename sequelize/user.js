const { promiseImpl } = require('ejs');
const {Sequelize , DataTypes} = require('sequelize');

const databaseConnection = async function() {
    const sequelize = new Sequelize('dummydatabase','root','Zafer1998@',{
        dialect:'mysql',
        host:'localhost',
        port:'3306'
    });
    
    sequelize.authenticate().then(() => console.log('database connected')).catch(err => console.error(err));
}


databaseConnection();

module.exports = Sequelize;


