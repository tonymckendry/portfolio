var express = require('express');
var router = express.Router();
var knex = require("../db/knex");


var Moves = function(){
  return knex('moves');
}


router.get("/", function(req,res){
   Moves().select().then(function(payload){
     res.json(payload);
     console.log('working')
   });
});

router.get("/:id", function(req,res){
   Moves().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});

router.post('/', function(req,res){
  Moves().insert(req.body).then(function(result){
    res.json({success: true})
  })
})


module.exports = router;
