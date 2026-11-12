import React from "react"
import IngredientList from "./components/IngredientsList"
import RecipeDisplay from "./components/RecipeDisplay"
import { getRecipeFromAi } from "./ai"

export default function Main() {

  const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipe, setRecipe] = React.useState(false)
  
  function addIngredient(data) {
      const newIngredient = data.get("ingredient")
      setIngredients (prev => [...prev, newIngredient])
    }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromAi(ingredients)
    setRecipe(recipeMarkdown)
  }
  
  
  return (
    <main>
      
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <button>Add ingredient</button>
      </form>

      { ingredients.length > 0 && 
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />}

      { recipe && 
        <RecipeDisplay recipe={recipe} />}

    </main>
  )
}
