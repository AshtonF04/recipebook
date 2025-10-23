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
    <RecipeCard key={recipe._id} recipe={recipe} />
  )

  return (
    <div>
      <h2 className="font-bold text-xl">Your Recipes</h2>

      <div className="flex flex-wrap ">
        {recipeComponents}
      </div>
    </div>
  )
}

export default home