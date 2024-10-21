document.getElementById('search-btn').addEventListener('click', searchRecipes);

function searchRecipes() {
    const ingredients = document.getElementById('ingredients-input').value;
    if (ingredients.trim() === '') {
        alert('Wpisz składniki!');
        return;
    }

    const apiKey = config.apiKey;
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error(error));
    }

function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" />
            <h3>${recipe.title}</h3>
            <p>Użyte składniki: ${recipe.usedIngredientsCount}</p>
            <p>Brakujące składniki: ${recipe.missedIngredientsCount}</p>
            <a href="https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}" target="_blank">Zobacz przepis</a>
        `;
        container.appendChild(recipeCard);
    });
}

