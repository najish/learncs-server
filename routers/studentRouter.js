const express = require('express');
const studentRouter = express.Router();



studentRouter.get("/", (req, res) => {
    res.json([
      {
        id: 1,
        name: "John Doe",
        age: 20,
        address: "123 Main Street, Cityville",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 22,
        address: "456 Elm Street, Townsville",
      },
      {
        id: 3,
        name: "Alice Johnson",
        age: 21,
        address: "789 Oak Avenue, Villagetown",
      },
      {
        id: 4,
        name: "Bob Williams",
        age: 19,
        address: "1011 Pine Road, Hamletville",
      },
      {
        id: 5,
        name: "Eva Brown",
        age: 20,
        address: "1213 Cedar Lane, Countryside",
      },
      {
        id: 6,
        name: "Michael Wilson",
        age: 23,
        address: "1415 Birch Avenue, Mountainview",
      },
      {
        id: 7,
        name: "Sophia Lee",
        age: 21,
        address: "1617 Maple Street, Seaside",
      },
      {
        id: 8,
        name: "David Taylor",
        age: 22,
        address: "1819 Spruce Drive, Lakeside",
      },
      {
        id: 9,
        name: "Olivia Garcia",
        age: 20,
        address: "2021 Elmwood Lane, Riverside",
      },
      {
        id: 10,
        name: "Daniel Martinez",
        age: 21,
        address: "2223 Oakwood Road, Hillside",
      },
    ]);
});




studentRouter.get("/:id",(req,res) => {
    const studentId = req.params.id;
    res.send(`Student Id : ${studentId}`);
});


studentRouter.post('/addStudent',(req,res) => {
    res.send("student post method");
});


module.exports = studentRouter;