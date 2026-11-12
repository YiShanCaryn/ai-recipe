export default function RecipeDisplay(props) {
    return (
        <section>
            <h2>Chef AI Recommends:</h2>
            {props.recipe}
        </section>
    )
}