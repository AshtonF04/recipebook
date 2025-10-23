import React from 'react'
import foodImage from '../alfredo.jpg'

function RecipeCard({ recipe }) {
  return (
    <div className="p-4 flex flex-col gap-2">
        <div
            className="w-48 h-32 bg-cover bg-center bg-no-repeat rounded"
            style={{ backgroundImage: `url(${foodImage})` }}
        >     
        </div>
        <p className='text-lg text-center font-semibold'>{recipe.title}</p>
    </div>
  )
}

export default RecipeCard