import React from "react"
import IngredientList from "./components/IngredientsList"
import RecipeDisplay from "./components/RecipeDisplay"
import { getRecipeFromAi } from "./ai"

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  function addIngredient(data) {
      const newIngredient = data.get("ingredient")
      setIngredients (prev => [...prev, newIngredient])
    }

  async function getRecipe() {
    setLoading(true)
    setError(null)
    
    try {
      const recipeJson = await getRecipeFromAi(ingredients)
      
      const cleanJson = recipeJson.replace(/^```(json)?\s*/, '').replace(/\s*```$/, '')
      const recipe = JSON.parse(cleanJson)
      const markdown = `# ${recipe.title}\n\n## Ingredients\n\n${recipe.ingredients.map(i => `- ${i}`).join('\n')}\n\n## Instructions\n\n${recipe.instructions.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}`
      setRecipe(markdown)
    } catch (err) {
      setError(err.message || 'Failed to load recipe')
      console.error('Recipe error:', err)
    } finally {
      setLoading(false)
    }
  }
  
  
  return (
    <main>
      
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <button>Add ingredient</button>
      </form>

      { ingredients.length > 0 && 
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />}

      {loading && <p className="loading-message">Loading recipe from AI...</p>}
      {error && <div className="error-message"><p>{error}</p></div>}
      {recipe && <RecipeDisplay recipe={recipe} />}

    </main>
  )
}
