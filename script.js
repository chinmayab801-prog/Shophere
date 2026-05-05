const products = [
    { id: 1, name: "Stylish Saree", price: 350, image: "https://via.placeholder.com/200x250" },
    { id: 2, name: "Casual Kurti", price: 299, image: "https://via.placeholder.com/200x250" },
    { id: 3, name: "Smart Watch", price: 999, image: "https://via.placeholder.com/200x250" },
    { id: 4, name: "Trendy Shoes", price: 450, image: "https://via.placeholder.com/200x250" },
];

const productGrid = document.getElementById('product-grid');

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <span class="free-delivery">Free Delivery</span>
        `;
        productGrid.appendChild(card);
    });
}

displayProducts();
