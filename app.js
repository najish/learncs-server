const express = require('express')
const app = express()
const port = 3000




const myLogger = function(req,res,next) {
    console.log('LOGGED');
    next();
}

const requestTime = function(req,res,next) {
    req.requestTime = Date.now();
    next();
}


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

app.listen(port,() => {
    console.log(`server running at port : ${port}`)
});