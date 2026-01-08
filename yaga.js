// Product Data
const products = [
    {
        id: 1,
        name: "Hibiscus Powder",
        subtitle: "100% Pure & Natural",
        description: "Rich in Vitamin C, antioxidants, and proteins for healthy hair and skin",
        weight: "Net Weight: 100 g",
        features: ["Rich in Vitamin C", "Powerful antioxidants", "Natural proteins", "Chemical-free"],
        image: "1000252028.png"
    },
    {
        id: 2,
        name: "Beetroot Powder",
        subtitle: "100% Pure & Natural",
        description: "Enhance skin texture and brighten your complexion naturally",
        weight: "Net Weight: 100 g",
        features: ["Enhances skin texture", "Brightens complexion", "No preservatives", "Chemical-free"],
        image: "1000252781.png"
    },
    {
        id: 3,
        name: "Orange Peel Powder",
        subtitle: "100% Pure & Natural",
        description: "Rich in Vitamin C, deeply nourishes and brightens your skin naturally",
        weight: "Net Weight: 100 g",
        features: ["Rich in Vitamin C", "Deeply nourishes skin", "Natural brightener", "Chemical-free"],
        image: "1000252782.png"
    },
    {
        id: 4,
        name: "Sandalwood Powder",
        subtitle: "100% Pure & Natural",
        description: "Natural Sandalwood Powder for soft, smooth, and refreshed skin",
        weight: "Net Weight: 100 g",
        features: ["Softens skin", "Smooths texture", "Refreshes skin", "No preservatives"],
        image: "1000252789.png"
    },
    {
        id: 5,
        name: "Amla Powder",
        subtitle: "100% Pure & Natural",
        description: "Nature's Vitamin C - Pure Amla Powder for glowing skin, healthy hair, and overall wellness",
        weight: "Net Weight: 100 g",
        features: ["Nature's Vitamin C", "Glowing skin", "Healthy hair", "Overall wellness"],
        image: "1000252797.png"
    },
    {
        id: 6,
        name: "Moringa Leaf Powder",
        subtitle: "100% Pure & Natural",
        description: "Pure Moringa Leaf Powder for better energy, immunity, and overall health",
        weight: "Net Weight: 200 g",
        features: ["Boosts energy", "Enhances immunity", "Overall health", "Chemical-free"],
        image: "1000252800.png"
    },
    {
        id: 7,
        name: "Ashwagandha Powder",
        subtitle: "100% Pure & Natural",
        description: "Organic Ashwagandha Powder for natural energy, stress relief, and vitality",
        weight: "Net Weight: 100 g",
        features: ["Natural energy", "Stress relief", "Boosts vitality", "Organic"],
        image: "1000252802.png"
    },
    {
        id: 8,
        name: "Indigo Powder",
        subtitle: "100% Pure & Natural",
        description: "100% Pure Indigo Powder for safe, chemical-free hair dyeing",
        weight: "Net Weight: 200 g",
        features: ["Safe hair dye", "Chemical-free", "Natural color", "No preservatives"],
        image: "1000252815.png"
    },
    {
        id: 9,
        name: "Reetha Powder",
        subtitle: "100% Pure & Natural",
        description: "Bring Back Your Hair's Natural Beauty - 100% Pure Reetha Powder for a chemical-free cleanse",
        weight: "Net Weight: 100 g",
        features: ["Chemical-free cleanse", "Natural hair beauty", "Gentle cleanser", "No preservatives"],
        image: "1000252816.png"
    },
    {
        id: 10,
        name: "Indigo Powder",
        subtitle: "100% Pure & Natural",
        description: "100% Pure Indigo Powder for safe, chemical-free hair dyeing",
        weight: "Net Weight: 200 g",
        features: ["Safe hair dye", "Chemical-free", "Natural color", "Non-GMO"],
        image: "1000252817.png"
    },
    {
        id: 11,
        name: "Henna Powder",
        subtitle: "100% Pure & Natural",
        description: "100% Pure Henna Powder for smooth, shiny, and naturally colored hair",
        weight: "Net Weight: 200 g",
        features: ["Smooth hair", "Shiny finish", "Natural color", "Chemical-free"],
        image: "1000252818.png"
    },
    {
        id: 12,
        name: "Multani Mitti",
        subtitle: "100% Pure & Natural",
        description: "Natural Multani Mitti for a smoother, brighter, and more youthful skin",
        weight: "Net Weight: 100 g",
        features: ["Smoother skin", "Brighter complexion", "Youthful appearance", "Natural clay"],
        image: "1000252823.png"
    },
    {
        id: 13,
        name: "Mulethi Powder",
        subtitle: "100% Pure & Natural",
        description: "Mulethi Powder to remove dark spots, blemishes, and reduce signs of aging",
        weight: "Net Weight: 100 g",
        features: ["Removes dark spots", "Reduces blemishes", "Anti-aging", "Chemical-free"],
        image: "1000252869.png"
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupModal();
    setupMobileMenu();
    setupSmoothScrolling();
});

// Load products to the page
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x250/1a472a/ffffff?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-subtitle">${product.subtitle}</div>
                <div class="product-tag">NATURAL • 100% PURE</div>
                <p class="product-description">${product.description}</p>
                <ul class="product-features">
                    ${product.features.map(feature => `<li><i class="fas fa-check-circle"></i>${feature}</li>`).join('')}
                </ul>
                <div class="product-weight">${product.weight} | No preservatives | Chemical-free | Non-GMO</div>
                <button class="buy-now-btn"