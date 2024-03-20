const passport = require('passport');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('dummydatabase','root','Zafer1998@',{
    dialect: 'mysql',
    host:'localhost',
    port:'3306',
},{
    freezeTableName : true,
});


sequelize.authenticate().then(() => {
    console.log('database connected with mysql');
}).catch(err => console.error(err));



const User = sequelize.define('user',{
    username : {
        type:DataTypes.STRING,
        allowNull:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false,
    freezeTableName: true
});




User.sync({alter: true});



const user1 = User.build({username:"najish.eqbal",password:"Zafer1998@"});
console.log(user1.toJSON());

user1.save().then(() => {
    console.log('user1 is saved sucessfully');
}).catch(err => console.error(err));



User.create({username:"ravishkr",password:'ravish@1998'}).
then(data => console.log(data.toJSON())).catch(err => console.log(err));

const shifa = User.create({username:"shifaiqbal098",password:"Shifa1998@"});

shifa.password ="najish";

console.log(shifa);



User.findAll().then(users => {
    users.forEach(user => console.log(user.toJSON()));
}).catch(err => console.error(err));


User.findByPk('1').then(user => console.log(user.toJSON()));