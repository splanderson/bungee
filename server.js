var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var massiveInstance = massive.connectSync({
  connectionString : "postgres://postgres:1234@localhost:8666/bungee"
});
// var controller = require('./controller.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


app.set('db', massiveInstance);

app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
