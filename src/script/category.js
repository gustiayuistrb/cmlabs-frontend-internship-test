$(function() {
    $("#navbar").load("navbar.html");
    loadCategories();
});

function loadCategories() {
    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        method: 'GET',
        success: function(data) {
            displayCategories(data.categories);
        },
        error: function() {
            console.error('Failed to fetch categories.');
        }
    });
}

function displayCategories(categories) {
    const container = $('.category-list');
    categories.forEach(category => {
        const categoryCard = `
            <div class="category-card">
                <a href="category-detail.html?category=${category.strCategory}" onclick="localStorage.setItem('selectedCategory', '${category.strCategory}')">
                    <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                    <div class="category-title-container">
                    <h3>${category.strCategory}</h3>
                    </div>
                </a>
            </div>
        `;
        container.append(categoryCard);
    });
}
