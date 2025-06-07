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
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8 relative overflow-hidden">
  {/* Floating animated elements */}
  <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
    <div className="animate-float-slow opacity-30">
      <svg className="w-32 h-32 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="animate-float-delay opacity-30">
      <svg className="w-40 h-40 text-indigo-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  </div>

  <div className="relative z-10">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Mura Infinity Tech</h1>
    <p className="text-lg mb-6 text-gray-600">Your premier destination for quality electronics in Rwanda</p>
    
    {/* Animated advertisement cards */}
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
        <div className="flex items-center">
          <div className="animate-pulse bg-blue-100 p-3 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Special Offers</h3>
            <p className="text-sm text-gray-500">20% off on all smartphones</p>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in delay-100">
        <div className="flex items-center">
          <div className="animate-bounce bg-green-100 p-3 rounded-full mr-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Free Delivery</h3>
            <p className="text-sm text-gray-500">On orders over 50,000 FRW</p>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in delay-200">
        <div className="flex items-center">
          <div className="animate-spin-slow bg-purple-100 p-3 rounded-full mr-3">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Tech Support</h3>
            <p className="text-sm text-gray-500">24/7 customer service</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex space-x-4">
      <Link 
        to="/products" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 flex items-center"
      >
        <span>Shop Now</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
      <Link 
        to="/register" 
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 flex items-center"
      >
        <span>Register</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </Link>
    </div>
  </div>

  {/* Add these animations to your CSS or Tailwind config */}
  <style jsx>{`
    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }
    .animate-float-delay {
      animation: float 8s ease-in-out 2s infinite;
    }
    .animate-spin-slow {
      animation: spin 6s linear infinite;
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    .animate-fade-in.delay-100 {
      animation-delay: 0.1s;
    }
    .animate-fade-in.delay-200 {
      animation-delay: 0.2s;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
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
      </section>
    </div>
  );
};

export default Home;
