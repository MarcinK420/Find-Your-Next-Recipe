document.getElementById('search-btn').addEventListener('click', searchRecipes);

function searchRecipes() {
    const ingredients = document.getElementById('ingredients-input').value;
    if (ingredients.trim() === '') {
        alert('Wpisz składniki!');
        return;
    }

    const apiKey = 'ec68f7897ce34f40a09fca9a222ef0c0';
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error(error));
    }

