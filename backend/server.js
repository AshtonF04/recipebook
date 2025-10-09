const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();

const recipeRoutes = require('./routes/recipes');

// Create express app
const app = express();
app.use(express.json())

// Use routes 
app.use('/api/recipes', recipeRoutes);

// Connect to database
mongoose.connect(process.env._URI)
    .then(() => {
        // Start app
        app.listen(process.env._PORT, () => {
            console.log('connected to database, app listening on port ', process.env._PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })
