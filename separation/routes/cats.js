var express = require('express');
var router = express.Router();
var knex = require("../db/knex");


var Cat = function(){
  return knex('cats');
}


router.get("/", function(req,res){
   Cat().select().then(function(payload){
     res.json(payload);
   });
});

router.get("/:id", function(req,res){
   Cat().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});

router.post('/', function(req,res){
  Cat().insert(req.body).then(function(result){
    res.json({success: true})
  })
})


module.exports = router;
