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

