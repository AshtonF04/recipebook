const express = require('express');
require('dotenv').config();

const recipeRoutes = require('./routes/recipes');

// Create express app
const app = express();

// Use routes 
app.use('/api/recipes', recipeRoutes);

// Start app
app.listen(process.env._PORT, () => {
    console.log('app listening on port ', process.env._PORT);
})