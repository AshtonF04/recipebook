import React from 'react'
import { useEffect, useState } from 'react'
import { fetchRecipes } from '../services/api'

import RecipeCard from '../components/RecipeCard'


const home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRecipes()
      setRecipes(data)
    }
    getData()
  }, [])

  const recipeComponents = recipes.map(recipe => 
    <li>{recipe.title}</li>
  )

  return (
    <div>
      <h2 class="font-bold text-xl">Your Recipes</h2>

      <div className="flex flex-wrap ">
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}

export default home