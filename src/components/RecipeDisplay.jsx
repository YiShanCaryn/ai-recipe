import ReactMarkdown from 'react-markdown'

export default function RecipeDisplay(props) {
    return (
        <section className='suggested-recipe-container'>
            <h2>Chef AI Recommends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}