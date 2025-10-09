const express = require('express');
const router = express.Router();
const { createRecipe, getRecipes } = require('../controllers/recipeController');
const { create } = require('../models/RecipeModel');

// Get all recipes
router.get('/', getRecipes)

// Get single recipe
router.get('/:id', (req, res) => {
    res.status(200).json({msg: 'Get single recipe'})
})

// Add new recipe
router.post('/', createRecipe)

// Update existing recipe
router.patch('/:id', (req, res) => {
    res.status(200).json({msg: 'Update recipe'})
})

// Delete existing recipe
router.delete('/:id', (req, res) => {
    res.status(200).json({msg: 'Delete recipe'})
})

module.exports = router;