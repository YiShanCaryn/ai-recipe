# AI Recipe Generator

A React-based web application that generates custom recipes from your ingredients using AI. Simply add the ingredients you have on hand, and the app will fetch a delicious recipe from Mistral AI's API.

## Features

- **Ingredient Management**: Add ingredients one by one to build your list
- **AI-Powered Recipes**: Get custom recipes generated from your ingredient list
- **Clean Display**: Recipes are formatted with markdown for easy reading
- **Responsive**: Works on desktop and mobile devices

## Screenshot

The app displays a chef header, an ingredient input form, your current ingredient list, and the generated recipe with title, ingredients, and step-by-step instructions.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 8
- **Markdown Rendering**: react-markdown
- **AI Provider**: Mistral AI API
- **Linting**: Oxlint

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Mistral AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-recipe.git
   cd ai-recipe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root and add your Mistral API key:
   ```env
   VITE_MISTRAL_API_KEY=your_mistral_api_key_here
   ```
   
   You can get a Mistral API key from [Mistral AI Console](https://console.mistral.ai/).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   The app will be available at `http://localhost:5173`

## Usage

1. **Add Ingredients**: Type an ingredient in the input field and click "Add ingredient" or press Enter
2. **Build Your List**: Continue adding ingredients (at least 4 recommended)
3. **Generate Recipe**: Once you have 4+ ingredients, click "Get a recipe" button
4. **View Recipe**: The AI will generate a recipe with:
   - Recipe title
   - List of ingredients
   - Step-by-step instructions

## Project Structure

```
ai-recipe/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── IngredientsList.jsx
│   │   └── RecipeDisplay.jsx
│   ├── ai.js            # Mistral AI API integration
│   ├── App.jsx          # Main app component
│   ├── Header.jsx       # App header with logo
│   ├── Main.jsx         # Main page with ingredient and recipe logic
│   ├── index.jsx        # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Components

### `Header.jsx`
Displays the app logo and title.

### `Main.jsx`
Core component with state management for:
- `ingredients`: Array of user-added ingredients
- `recipe`: Generated recipe in markdown format
- `loading`: Loading state during API calls
- `error`: Error state for failed requests

Handles:
- Adding new ingredients via form submission
- Fetching recipes from Mistral AI
- Error handling and loading states

### `IngredientsList.jsx`
Displays the list of added ingredients and the "Get a recipe" button (visible when 4+ ingredients are present).

### `RecipeDisplay.jsx`
Renders the generated recipe using react-markdown for proper formatting.

### `ai.js`
Contains the `getRecipeFromAi()` function that:
- Constructs the API request to Mistral AI
- Includes a system prompt to ensure JSON response format
- Handles API errors and response parsing
- Returns the recipe JSON string

## API Integration

The app uses Mistral AI's chat completions API with:
- **Model**: `mistral-tiny` (can be changed to other models)
- **Temperature**: 0.7 (controls randomness)
- **System Prompt**: Ensures consistent JSON response format

### Expected JSON Format

```json
{
  "title": "Recipe Name",
  "ingredients": ["ingredient 1", "ingredient 2"],
  "instructions": ["step 1", "step 2", "step 3"]
}
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_MISTRAL_API_KEY` | Your Mistral AI API key | Yes |

### Changing AI Model

Edit `src/ai.js` and change the `model` field in the request body:
```javascript
model: "mistral-small",  // or "mistral-medium", "mistral-large"
```

### Changing Temperature

Adjust the `temperature` parameter in `src/ai.js` (0-1 range, where 0 is deterministic and 1 is most creative).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint for code quality |

## Styling

Global styles are in `src/index.css`. The app uses semantic HTML and CSS classes for styling. You can customize:
- `.add-ingredient-form` - Ingredient input form
- `.ingredients-list` - List of ingredients
- `.get-recipe-container` - Recipe generation button container
- `.suggested-recipe-container` - Generated recipe display
- `.loading-message` - Loading indicator
- `.error-message` - Error messages

## Error Handling

The app handles various error scenarios:
- Network errors when connecting to Mistral API
- Invalid API responses
- JSON parsing errors
- API authentication errors

Errors are displayed to the user in a clear, user-friendly format.

## Future Enhancements

- [ ] Recipe image generation
- [ ] Save favorite recipes
- [ ] Share recipes via URL
- [ ] Nutritional information
- [ ] Cooking time estimates
- [ ] Multiple recipe suggestions
- [ ] Filter by cuisine type
- [ ] Shopping list feature

## License

This project is private and not open source.

## Contributing

Currently not accepting external contributions as this is a personal project.

## Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Mistral AI](https://mistral.ai/)
- Bundled with [Vite](https://vitejs.dev/)
