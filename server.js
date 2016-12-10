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
app.get('/api/category', mainCtrl.GetAll);

//GET return_link.sql
app.get('/api/search', mainCtrl.GetOne);

//PUT update_link.sql
// app.put('/api/updateLink', mainCtrl.UpdateLink);
// app.put('/api/updateTitle', mainCtrl.UpdateTitle);
// app.put('/api/updateCat', mainCtrl.UpdateCat);
// app.put('/api/updateSub', mainCtrl.UpdateSub);
// app.put('/api/updateOS', mainCtrl.UpdateOS);
app.put('/api/updateDesc', mainCtrl.UpdateDesc);

//POST create_link.sql
app.post('/api/add', mainCtrl.Create);

//DELETE delete_link.sql
app.delete('/api/delete', mainCtrl.Delete);

app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
