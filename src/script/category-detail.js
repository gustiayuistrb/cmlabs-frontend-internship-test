$(document).ready(function () {
  $('#navbar').load('navbar.html');

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  if (category) {
      $('#selected-category').text(category).addClass('active'); 
      loadMeals(category); 
  } else {
      console.error('No category found');
  }

  function loadMeals(category) {
      const mealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

      $.ajax({
          url: mealsUrl,
          method: 'GET',
          success: function (data) {
              displayMeals(data.meals);
          },
          error: function () {
              console.error("Error fetching meals.");
          }
      });
  }

  function displayMeals(meals) {
      const mealList = $('.meal-list');
      mealList.empty();
      meals.forEach(meal => {
          const mealCard = `
              <div class="meal-card">
                  <a href="meal-detail.html?mealId=${meal.idMeal}">
                      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                      <h3>${meal.strMeal}</h3>
                  </a>
              </div>
          `;
          mealList.append(mealCard);
      });
  }
});
