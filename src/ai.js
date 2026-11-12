const SYSTEM_PROMPT = `You are a helpful chef assistant. Generate a delicious recipe using these ingredients.
Return ONLY valid JSON in this exact format:
{
    "title": "Recipe Name",
    "ingredients": ["ingredient 1", "ingredient 2"],
    "instructions": ["step 1", "step 2", "step 3"]
}`

export async function getRecipeFromAi(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY

    try {
        const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "mistral-tiny",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `Ingredients: ${ingredientsString}` }
                ],
                temperature: 0.7
            })
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || `API Error: ${response.status}`)
        }

        const data = await response.json()
        return data.choices[0].message.content
    } catch (err) {
        console.error("Mistral API Error:", err)
        throw err
    }
}  
    