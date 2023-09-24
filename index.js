const express = require("express");
const bodyParser = require('body-parser');

const app = express(); //we call the entire package express and save it inside of another constant called “app”

app.use(bodyParser.urlencoded({extended: false }));

//this backend code lives inside of some server.
app.get("/", function(req, res)
{
    // console.log(req);
    res.sendFile(__dirname + "/index.html");
    // res.send(__dirname);
    //console.log(__dirname); //getting the exact location of the directory where this backend code is located(in which port, which server, etc).
});

app.post("/", function(req, res)
{
    // res.send("The back-end has received the POST Request.");
    var num1 = Number(req.body.n1); //from the body of the request that has been created by the urlencoded method of body-parser, we need to get the access to the n1 data.
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Addition of the two numbers : " + result);
});

app.get("/about", function(req, res)
{
    // console.log(req);
    res.send("About kanu seth : hehehehe");
});

//creating a web server - 3000.
app.listen(3000, function()
{
    console.log("Server has started on port 3000.");
});

//your backend code needs to continuously run.