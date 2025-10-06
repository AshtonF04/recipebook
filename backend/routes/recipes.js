const express = require('express');
const router = express.Router();

// Get all recipes
router.get('/', (req, res) => {
    res.status(200).json({msg: 'Get all recipes'});
})

// Get single recipe
router.get('/:id', (req, res) => {
    res.status(200).json({msg: 'Get single recipe'})
})

// Add new recipe
router.post('/', (req, res) => {
    res.status(200).json({msg: 'Add new recipe'})
})

// Update existing recipe
router.patch('/:id', (req, res) => {
    res.status(200).json({msg: 'Update recipe'})
})

// Delete existing recipe
router.delete('/:id', (req, res) => {
    res.status(200).json({msg: 'Delete recipe'})
})

module.exports = router;