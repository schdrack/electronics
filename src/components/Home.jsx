/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 29/04/2025 - 12:20:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ products, addToCart }) => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <section className="bg-blue-100 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Mura Infinity Tech</h1>
        <p className="text-lg mb-6">Your premier destination for quality electronics in Rwanda</p>
        <div className="flex space-x-4">
  <Link 
    to="/products" 
    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Shop Now
  </Link>
  <Link 
    to="/register" 
    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
  >
    Register
  </Link>
</div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-blue-600 font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
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
      </section>
    </div>
  );
};

export default Home;