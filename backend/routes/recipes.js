const express = require('express');
const router = express.Router();
const { createRecipe, getRecipes, getRecipe, deleteRecipe } = require('../controllers/recipeController');
const { create } = require('../models/RecipeModel');

// Get all recipes
router.get('/', getRecipes)

// Get single recipe
router.get('/:id', getRecipe)

// Add new recipe
router.post('/', createRecipe)

// Update existing recipe
router.patch('/:id', (req, res) => {
    res.status(200).json({msg: 'Update recipe'})
})

// Delete existing recipe
router.delete('/:id', deleteRecipe)

module.exports = router;