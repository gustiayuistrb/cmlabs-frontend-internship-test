$(document).ready(function () {
    $('#navbar').load('navbar.html');
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('mealId');

    if (mealId) {
        loadMealDetail(mealId);
    }

    function loadMealDetail(mealId) {
        const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        
        $.ajax({
            url: mealUrl,
            method: "GET",
            success: function (data) {
                const meal = data.meals[0];
                displayMealDetail(meal);
                
                const selectedCategory = localStorage.getItem('selectedCategory');
                $('#selected-category-link').text(selectedCategory)
                                            .attr('href', `category-detail.html?category=${selectedCategory}`);
                $('#selected-meal').text(meal.strMeal).addClass('active');
            },
            error: function () {
                console.error("Error fetching meal details.");
            }
        });
    }

    function displayMealDetail(meal) {
        $('#meal-title').text(meal.strMeal);
        $('#meal-area').text(meal.strArea);
        $('#meal-image').attr('src', meal.strMealThumb);
        $('#meal-description').text(meal.strInstructions);
        
        const recipeList = $('#meal-recipe');
        recipeList.empty();
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                recipeList.append(`<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`);
            }
        }
        
        const videoContainer = $('#meal-video-container');
        if (meal.strYoutube) {
            videoContainer.show();
            $('#meal-video').attr('src', meal.strYoutube.replace("watch?v=", "embed/"));
        } else {
            videoContainer.hide(); 
        }
    }
});
