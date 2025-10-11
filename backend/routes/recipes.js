const express = require('express');
const router = express.Router();
const { createRecipe, getRecipes, getRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipeController');

// Get all recipes
router.get('/', getRecipes)

// Get single recipe
router.get('/:id', getRecipe)

// Add new recipe
router.post('/', createRecipe)

// Update existing recipe
router.patch('/:id', updateRecipe)

// Delete existing recipe
router.delete('/:id', deleteRecipe)

module.exports = router;