export default function IngredientsList (props){
    
    const ingredientListItems = props.ingredients.map(ingre =>
        <li>{ingre}</li>
    )

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite" >{ingredientListItems}</ul>

            { props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.recipeShown}>Get a recipe</button>
            </div>}
        </section>
    )
}