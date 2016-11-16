const express = require('express')
  ,bodyParser = require('body-parser')
  ,cors = require('cors')
  ,massive = require('massive')
  ,massiveInstance = massive.connectSync({
    connectionString : "postgres://postgres:1234@localhost:8666/bungee"
  });

var app = module.exports = express();
app.set('db', massiveInstance);
var mainCtrl = require('./mainCtrl.js');
app.use(bodyParser.json());
app.use(cors());


//GET read_link.sql
app.get('/category', mainCtrl.GetAll);

//GET return_link.sql
app.get('/search', mainCtrl.GetOne);

//PUT update_link.sql
app.put(mainCtrl.Update);

app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
