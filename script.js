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
            <button onclick="addRecipeToFavorites(${recipe.id})">Dodaj do ulubionych</button>
        `;
        container.appendChild(recipeCard);
    });
}

function addRecipeToFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Przepis został dodany do ulubionych!');
        loadFavorites();
    } else {
        alert('Przepis jest już w ulubionych!');
    }
}

function removeRecipeFromFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== recipeId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Przepis został usunięty z ulubionych!');
    loadFavorites();
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length > 0) {
        const apiKey = config.apiKey;
        const apiUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${favorites.join(',')}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayFavorites(data))
            .catch(error => console.error(error));
    } else {
        displayFavorites([]); // Call displayFavorites with an empty array if no favorites
    }
}

function displayFavorites(favorites) {
    const container = document.getElementById('favorites-container');
    container.innerHTML = '';

    favorites.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" />
            <h3>${recipe.title}</h3>
            <p>Użyte składniki: ${recipe.usedIngredientsCount}</p>
            <p>Brakujące składniki: ${recipe.missedIngredientsCount}</p>
            <a href="https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}" target="_blank">Zobacz przepis</a>
            <button class="remove-btn" onclick="removeRecipeFromFavorites(${recipe.id})">Usuń z ulubionych</button>
        `;
        container.appendChild(recipeCard);
    });

    updateFavorites(); // Call updateFavorites after displaying favorites
}

document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.getElementById('favorites-container');

    function updateFavorites() {
        if (favoritesContainer.children.length === 0) {
            favoritesContainer.innerHTML = '<p>Brak ulubionych przepisów</p>';
        }
    }

    // Initial check
    updateFavorites();
});

window.onload = loadFavorites;