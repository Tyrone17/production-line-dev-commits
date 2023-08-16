const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'r00tw0rd_ooo',
  database : 'tsb',
  port     : '3317'
});

connection.connect(function(err) {
    if(err){
        console.log(err);
    } else {
        console.log('Connected to local mySQL db successfully!');
    }
})

// Query strings:
const SELECT_ALL_STATEMENT = 'SELECT * FROM tsb.login;';
const INSERT_INTO_LOGIN_TABLE = "INSERT INTO tsb.login VALUES(ID,'Daline','daline_maasdorp@outlook.com','password@89','1')";

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/index1.html", function (req, res) {
  res.sendFile(__dirname + '/index1.html');
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/company-profile.html');
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/cover.css');
});

app.get("/", function (req, res) {
  res.sendFile('index.html');
});


app.get("/index1.html", function (req, res) {
  res.sendFile('/index1.html');
});

app.get("/", function (req, res) {
  res.sendFile('/company-profile.html');
});

app.get("/", function (req, res) {
  res.sendFile('/cover.css');
});


app.get('/', (req,res) =>(
  connection.query(SELECT_ALL_STATEMENT, function (error, results){
    if (error) {
        return res.send(error)
    }else{
        return res.json({results})
        dataSet.push(results)
    }  
  })
))

app.listen(4017, () =>{
  console.log('working and connected on port 4017')
})