export const fetchRecipes = async () => {
    try{
        const response = await fetch('http://localhost:3000/api/recipes')

        if (!response.ok){
          throw new Error("Response not okay.")
        }
    
        return await response.json()
    } catch (error) {
        console.error('Fetch error: ', error)
    }
}

  