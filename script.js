// Sample product data
const products = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 2799,
        originalPrice: null,
        image: "assets/products/p0.png",
        category: "dress",
        colors: ["#ff6b6b", "#4ecdc4", "#45b7d1"],
        backgroundColor: "#dddde1",
        badge: "new",
        featured: true
    },
    {
        id: 2,
        name: "Classic White Blouse",
        price: 1499,
        originalPrice: 65.99,
        image: "assets/products/p1.png",
        category: "top",
        colors: ["#ffffff", "#f8f9fa", "#e9ecef"],
        backgroundColor: "#dddde1",
        badge: "sale",
        featured: true
    },
    {
        id: 3,
        name: "High-Waisted Jeans",
        price: 4299,
        originalPrice: null,
        image: "assets/products/p2.png",
        category: "bottom",
        colors: ["#2c3e50", "#34495e", "#1a252f"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 4,
        name: "Floral Midi Skirt",
        price: 55.99,
        originalPrice: null,
        image: "assets/products/p3.png",
        category: "bottom",
        colors: ["#e74c3c", "#8e44ad", "#3498db"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: true
    },
    {
        id: 5,
        name: "Cashmere Sweater",
        price: 125.99,
        originalPrice: null,
        image: "assets/products/p4.png",
        category: "top",
        colors: ["#f39c12", "#e67e22", "#d35400"],
        backgroundColor: "#dddde1",
        badge: "new",
        featured: true
    },
    {
        id: 6,
        name: "Statement Earrings",
        price: 29.99,
        originalPrice: 39.99,
        image: "assets/products/p5.png",
        category: "accessory",
        colors: ["#f1c40f", "#e74c3c", "#9b59b6"],
        backgroundColor: "#dddde1",
        badge: "sale",
        featured: false
    },
    {
        id: 7,
        name: "Leather Handbag",
        price: 159.99,
        originalPrice: null,
        image: "assets/products/p6.png",
        category: "accessory",
        colors: ["#8b4513", "#654321", "#2f1b14"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: true
    },
    {
        id: 8,
        name: "Silk Scarf",
        price: 65.99,
        originalPrice: null,
        image: "assets/products/p7.png",
        category: "accessory",
        colors: ["#ff9ff3", "#54a0ff", "#5f27cd"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 9,
        name: "Evening Gown",
        price: 199.99,
        originalPrice: null,
        image: "assets/products/p8.png",
        category: "dress",
        colors: ["#2c2c54", "#000000", "#40407a"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: true
    },
    {
        id: 10,
        name: "Crop Top",
        price: 25.99,
        originalPrice: 35.99,
        image: "assets/products/p9.png",
        category: "top",
        colors: ["#ff6348", "#ff4757", "#ff3838"],
        backgroundColor: "#dddde1",
        badge: "sale",
        featured: false
    },
    {
        id: 11,
        name: "Wide Leg Trousers",
        price: 89.99,
        originalPrice: null,
        image: "assets/products/p10.png",
        category: "bottom",
        colors: ["#2c2c2c", "#696969", "#a9a9a9"],
        backgroundColor: "#dddde1",
        badge: "new",
        featured: true
    },
    {
        id: 12,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p11.png",
        category: "dress",
        colors: ["#8e44ad", "#9b59b6", "#bb8fce"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 13,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p12.png",
        category: "dress",
        colors: ["#8e44ad", "#9b59b6", "#bb8fce"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 14,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p13.png",
        category: "dress",
        colors: ["#8e44ad", "#9b59b6", "#bb8fce"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 15,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p14.png",
        category: "dress",
        colors: ["#c39b90", "#f5e2e0", "#7b5e5d"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 16,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p15.png",
        category: "dress",
        colors: ["#c39b90", "#f5e2e0", "#7b5e5d"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    },
    {
        id: 17,
        name: "Vintage Dress",
        price: 75.99,
        originalPrice: null,
        image: "assets/products/p16.png",
        category: "dress",
        colors: ["#c39b90", "#f5e2e0", "#7b5e5d"],
        backgroundColor: "#dddde1",
        badge: null,
        featured: false
    }
];

// State management
let currentProducts = [...products];
let displayedProducts = [];
let productsPerPage = 6;
let currentPage = 0;
let cart = [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const cartCount = document.querySelector('.cart-count');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartDisplay();
});

// Event listeners
function setupEventListeners() {
    loadMoreBtn.addEventListener('click', loadMoreProducts);
    categoryFilter.addEventListener('change', handleCategoryFilter);
    sortBy.addEventListener('change', handleSort);
    searchBtn.addEventListener('click', toggleSearchBar);
    searchInput.addEventListener('input', handleSearch);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Handle newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubscription);
    }
}

// Product rendering functions
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const badgeHtml = product.badge ? `<div class="product-badge ${product.badge}">${product.badge}</div>` : '';
    const originalPriceHtml = product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : '';
    
    const colorsHtml = product.colors.map(color => 
        `<div class="color-swatch" style="background-color: ${color}"></div>`
    ).join('');

    card.innerHTML = `
        <div class="product-image" style="background-color: ${product.backgroundColor}">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x600/f0f0f0/666?text=Image+Not+Found'">
            ${badgeHtml}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                ₹${product.price}
                ${originalPriceHtml}
            </div>
            <div class="product-colors">
                ${colorsHtml}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

function loadProducts() {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToAdd = currentProducts.slice(startIndex, endIndex);
    
    if (currentPage === 0) {
        productsGrid.innerHTML = '';
        displayedProducts = [];
    }

    productsToAdd.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
        displayedProducts.push(product);
        
        // Add animation
        setTimeout(() => {
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, 100);
    });

    currentPage++;
    
    // Hide load more button if no more products
    if (endIndex >= currentProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreProducts() {
    loadMoreBtn.innerHTML = '<div class="loading"></div> Loading...';
    
    setTimeout(() => {
        loadProducts();
        loadMoreBtn.innerHTML = 'Load More';
    }, 800);
}

// Filter and sort functions
function handleCategoryFilter() {
    const selectedCategory = categoryFilter.value;
    
    if (selectedCategory === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === selectedCategory);
    }
    
    resetPagination();
    loadProducts();
}

function handleSort() {
    const sortValue = sortBy.value;
    
    switch (sortValue) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            currentProducts.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            currentProducts.sort((a, b) => b.featured - a.featured);
            break;
    }
    
    resetPagination();
    loadProducts();
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    resetPagination();
    loadProducts();
}

function resetPagination() {
    currentPage = 0;
    displayedProducts = [];
}

// UI interaction functions
function toggleSearchBar() {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        handleSearch();
    }
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartDisplay();
        showAddToCartAnimation();
    }
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

function showAddToCartAnimation() {
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    cartBtn.style.background = '#2ed573';
    
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
        cartBtn.style.background = '';
    }, 300);
}

// Newsletter subscription
function handleNewsletterSubscription(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        // Simulate API call
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Subscribed!';
            submitBtn.style.background = '#2ed573';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                e.target.querySelector('input[type="email"]').value = '';
            }, 2000);
        }, 1000);
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initial styling for animation
const style = document.createElement('style');
style.textContent = `
    .product-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .filter-dropdown,
    .sort-dropdown {
        transition: all 0.3s ease;
    }
    
    .filter-dropdown:hover,
    .sort-dropdown:hover {
        border-color: #2c2c2c;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        searchBar.classList.remove('active');
    }
});

// Add loading state for initial load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add CSS for header animation
const headerStyle = document.createElement('style');
headerStyle.textContent = `
    .header {
        transition: transform 0.3s ease-in-out;
    }
`;
document.head.appendChild(headerStyle);