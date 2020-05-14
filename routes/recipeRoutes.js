const express = require('express');
const router = express.Router();
const knex = require('../knex/knex.js');


// GET all recipes
router.get('/all', function(req, res, next) {
  knex("recipes").select()
  .then(function(recipes) {
    res.json({recipes})
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET single activity *** //
router.get('/recipe/:id', function(req, res, next) {
  knex("recipes").where('id', req.params.id).first()
  .then(function(recipe) {
    res.status(200).json(recipe);
  })
  .catch(function(error) {
    next(error);
  });
});


// *** add activity *** //
router.post('/addrecipe', function(req, res, next) {
    console.log(req.body)
  knex("recipes").insert(req.body, "id")
  .then(function(recipeID){
    knex("recipes").where('id', recipeID).first()
    console.log(recipeID)
  })
  .then(function(recipe) {
    res.redirect("http://localhost:3001/view")
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update activity *** //
router.put('/:id', function(req, res, next) {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  knex("recipes").where('id', req.params.id).update(req.body)
  .then(function() {
    return knex("recipes").where('id', req.params.id).first()
  })
  .then(function(recipe) {
    res.status(200).json(recipe);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete activity *** //
router.delete('/:id', function(req, res, next) {
  knex("recipes").where('id', req.params.id).first()
  .then(function(recipe) {
    knex("recipes").where('id', req.params.id).del()
    .then(function() {
      res.status(200).json(recipe);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});

module.exports = router;
