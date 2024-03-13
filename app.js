const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 3000




const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'Zafer1998@',
    database:'learncs'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting : ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


connection.query('SELECT * FROM CUSTOMERS',function (error,results,fields) {
    if(error) throw error;
    console.log('THE Customer IS ',results[0]);
})

connection.end();

const myLogger = function(req,res,next) {
    console.log('LOGGED');
    next();
}

const requestTime = function(req,res,next) {
    req.requestTime = Date.now();
    next();
}

var corsOptions = {
    origin:['http://localhost:3000','http://localhost:5500']
};


app.use(express.static('public'));
app.use(express.static('files'));
app.use(cors(corsOptions))

app.use(myLogger);
app.use(requestTime);


app.get('/',(req,res) => {
    res.json("hello world");
});

// app.get('/shifa',(req,res) => {
//     res.download()
// })

app.post('/',(req,res) => {
    res.send("post method");
})
app.get('/students',(req,res) => {
    res.json(
        [
            {
            "id": 1,
            "name": "John Doe",
            "age": 20,
            "address": "123 Main Street, Cityville"
            },
            {
            "id": 2,
            "name": "Jane Smith",
            "age": 22,
            "address": "456 Elm Street, Townsville"
            },
            {
            "id": 3,
            "name": "Alice Johnson",
            "age": 21,
            "address": "789 Oak Avenue, Villagetown"
            },
            {
            "id": 4,
            "name": "Bob Williams",
            "age": 19,
            "address": "1011 Pine Road, Hamletville"
            },
            {
            "id": 5,
            "name": "Eva Brown",
            "age": 20,
            "address": "1213 Cedar Lane, Countryside"
            },
            {
            "id": 6,
            "name": "Michael Wilson",
            "age": 23,
            "address": "1415 Birch Avenue, Mountainview"
            },
            {
            "id": 7,
            "name": "Sophia Lee",
            "age": 21,
            "address": "1617 Maple Street, Seaside"
            },
            {
            "id": 8,
            "name": "David Taylor",
            "age": 22,
            "address": "1819 Spruce Drive, Lakeside"
            },
            {
            "id": 9,
            "name": "Olivia Garcia",
            "age": 20,
            "address": "2021 Elmwood Lane, Riverside"
            },
            {
            "id": 10,
            "name": "Daniel Martinez",
            "age": 21,
            "address": "2223 Oakwood Road, Hillside"
            }
      ]
      );
})

app.listen(port,() => {
    console.log(`server running at port : ${port}`)
});