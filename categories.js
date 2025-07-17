// Load categories from JSON file and display them
async function loadCategories() {
    try {
        const response = await fetch('categories.json');
        const categories = await response.json();
        
        displayCategories(categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        displayErrorMessage();
    }
}

// Display categories as Bootstrap cards
function displayCategories(categories) {
    const container = document.getElementById('categories-container');
    
    categories.forEach(category => {
        const categoryCard = createCategoryCard(category);
        container.appendChild(categoryCard);
    });
}

// Create individual category card
function createCategoryCard(category) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-md-6 col-sm-12';
    
    colDiv.innerHTML = `
        <div class="card category-card h-100" style="background-image: url('category_pic/${category.imageURL}');">
            <div class="card-overlay">
                <div class="card-body d-flex flex-column justify-content-end text-white">
                    <h5 class="card-title fw-bold">${category.name}</h5>
                    <p class="card-text">${category.description}</p>
                    <button class="btn btn-light btn-sm mt-2" onclick="exploreCategory('${category.name}')">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return colDiv;
}

// Handle category exploration (you can expand this later)
function exploreCategory(categoryName) {
    alert(`Exploring ${categoryName} category! This feature will be implemented soon.`);
}

// Display error message if JSON loading fails
function displayErrorMessage() {
    const container = document.getElementById('categories-container');
    container.innerHTML = `
        <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">
                <h4 class="alert-heading">Oops!</h4>
                <p>Unable to load categories. Please check if the categories.json file exists and is properly formatted.</p>
            </div>
        </div>
    `;
}

// Load categories when the page loads
document.addEventListener('DOMContentLoaded', loadCategories);