const Recipe = require('../models/RecipeModel')

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
        const recipe = await Recipe.findById(id)
        if (!recipe){
            return res.status(404).json({erorr: "No such recipe."})
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Create new recipes
const createRecipe = async (req, res) => {
    const {title, ingredients, instructions, category} = req.body
    
    try {
        const recipe = await Recipe.create({title, ingredients, instructions, category})
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

module.exports={ createRecipe, getRecipes, getRecipe, deleteRecipe }