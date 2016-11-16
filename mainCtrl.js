var app = require('./server');
var db = app.get('db');

module.exports = {
  Create: function(req, res){
    db.create_link(function(err, link){
      // res.send(link);
    })
  },
  GetAll: function(req, res){
    db.read_link(function(err, link){
      if (err){
        console.log(err);
      }else{
        res.send(link);
      }
    });
  },
  GetOne: function(req, res){
    db.return_link([req.query.title], function(err, link){
      if (err){
        console.log(err);
      }else{
        res.send(link);
      }
    });
  },
  Update: function(req, res){
    db.update_link()
    // user.name = req.params.name;
    // res.json(user.name);
  },
  Delete: function(req, res){
    db.delete_link()
  }
}
