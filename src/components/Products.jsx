// components/Products.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Products = ({ products, addToCart, cart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, 1000]);
  };

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-2xl">
            <input
              type="text"
              placeholder="Search for electronics..."
              aria-label="Search products"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button 
            className="md:hidden flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="w-1/4">
            <label className="font-semibold mb-2 block">Category</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <label className="font-semibold mb-2 block">
              Price Range: frw{priceRange[0]} - frw{priceRange[1]}
            </label>
            <div className="flex items-center gap-4">
              <input 
                type="range" min="0" max="1000" step="50"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input 
                type="range" min="0" max="1000" step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          <button 
            className="text-blue-600 hover:text-blue-800 self-end"
            onClick={resetFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Electronics Products</h2>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products match your search criteria.</p>
            <button 
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={resetFilters}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-gray-200 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img src={product.image} alt={product.name} className="h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-blue-600 font-bold text-xl mb-4">frw{product.price.toFixed(2)}</p>
                  <button 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary and Checkout */}
      {cart.length > 0 && (
        <div className="sticky bottom-0 left-0 w-full bg-white shadow-md p-4 border-t z-30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaShoppingCart className="text-blue-600" />
              <span>{cart.length} items in cart</span>
              <span className="text-blue-600">|</span>
              <span>Total: frw{totalCartPrice.toFixed(2)}</span>
            </div>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)}>
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full object-cover" />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">{selectedProduct.rating} rating</span>
                  </div>
                  <p className="text-blue-600 font-bold text-2xl mb-4">frw{selectedProduct.price.toFixed(2)}</p>
                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <button 
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
