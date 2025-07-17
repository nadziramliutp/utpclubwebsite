async function loadCategories() {
  try {
    const res = await fetch('../categories.json'); // adjust if needed
    const categories = await res.json();

    const container = document.getElementById('category-container');

    categories.forEach(cat => {
      const card = `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card text-bg-dark h-100 position-relative">
            <img src="${cat.imageUrl}" class="card-img" alt="${cat.title}">
            <div class="card-img-overlay d-flex flex-column justify-content-end" style="background: rgba(0, 0, 128, 0.4);">
              <h5 class="card-title">${cat.title}</h5>
              <p class="card-text">${cat.description}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error('Error loading categories:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadCategories);
