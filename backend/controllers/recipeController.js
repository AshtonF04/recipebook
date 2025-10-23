const Recipe = require('../models/RecipeModel')
const mongoose = require('mongoose');

// Get all recipes
const getRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find().sort({createdAt: -1})
        res.status(200).json(recipes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// Get single recipe by ID
const getRecipe = async (req, res) => {
    const { id } = req.params;
    try{
        // Check if ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid recipe ID." });
        }

        // Get recipe from database
        const recipe = await Recipe.findById(id)

        // If recipe not found return 404 error
        if (!recipe){
            return res.status(404).json({ error: "No such recipe." })
        }
        
        // Return recipe if found
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Create new recipes
const createRecipe = async (req, res) => {
    const {title, ingredients, instructions, category, imageUrl} = req.body
    
    try {
        const recipe = await Recipe.create({title, ingredients, instructions, category, imageUrl})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipe.deleteOne({_id: id})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Update Recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipe.updateOne({_id: id}, {$set: req.body}, {runValidators: true})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

module.exports={ createRecipe, getRecipes, getRecipe, deleteRecipe, updateRecipe }