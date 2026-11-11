import React from "react"
import IngredientList from "./components/IngredientsList"

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])
  const [recipeShown, setRecipeShown] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  function addIngredient(data) {
      const newIngredient = data.get("ingredient")
      setIngredients (prev => [...prev, newIngredient])
    }

  function renderRecipeShown() {
    setRecipeShown (prev => !prev)
    if (!recipeShown)
      setError(null) 
  }
  
  
  return (
    <main>
      
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <button>Add ingredient</button>
      </form>

      <IngredientList ingredients={ingredients} recipeShown={renderRecipeShown} />

    </main>
  )
}
