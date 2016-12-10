var app = require('./server');
var db = app.get('db');

module.exports = {
  Create: function(req, res){
    db.create_link([req.body.category, req.body.sub_category, req.body.os, req.body.title, req.body.description, req.body.linkurl], function(err, link){
      if (err){
        console.log(err);
      }else{
        res.send(req.body);
      }
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
  UpdateDesc: function(req, res){
    db.update_link([req.body.description, req.body.title], function(err, link){
      if (err){
        console.log(err);
      }else{
        res.send(req.body);
      }
    });
  },
  Delete: function(req, res){
    db.delete_link([req.body.title], function(err, link){
      if (err){
        console.log(err);
      }else{
        res.send(console.log("Successfully Deleted"));
      }
    });
  }
}
