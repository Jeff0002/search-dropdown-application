var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sakila',
  port: '8889'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");    
} else {
    console.log("Error connecting database ... ");    
}
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/search/:input",function(req, res){
  connection.query('SELECT country, COUNT(ID) as num from customer_list where country like \'' + req.params.input + '%\' group by country', function(err, rows, fields) {
  //connection.end();
  if (!err) 
    res.json(rows);
  else
    console.log('Error while performing Query.');
  });
});

app.get("/customer/:country",function(req, res){
  connection.query('SELECT ID, name, email FROM customer_list join customer WHERE customer.customer_id = customer_list.ID and country = \'' + req.params.country + '\'', function(err, rows, fields) {
  //connection.end();
  if (!err) 
    res.json(rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);