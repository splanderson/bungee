const express = require('express')
  ,bodyParser = require('body-parser')
  ,cors = require('cors')
  ,massive = require('massive')
  ,massiveInstance = massive.connectSync({
    connectionString : "postgres://postgres:1234@localhost:8666/bungee"
  });
var mainCtrl = require('./public/mainCtrl.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);

//GET read_link.sql
app.get('/search', mainCtrl.getAll);
//GET return_link.sql
// app.get('/categories', mainCtrl.getAll);

//PUT update_link.sql


app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
