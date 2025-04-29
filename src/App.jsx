/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 28/04/2025 - 17:00:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// App.jsx
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaStar, FaFilter, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';


// Mock data
const products = [
  { id: 1, name: 'Smartphone X', price: 299.99, category: 'Phones', rating: 4.5, image: 'src/phone.webp', description: 'Latest smartphone with advanced camera features' },
  { id: 2, name: 'Laptop Pro', price: 899.99, category: 'Laptops', rating: 4.8, image: 'src/computer.webp', description: 'High-performance laptop for professionals' },
  { id: 3, name: 'Wireless Earbuds', price: 79.99, category: 'Accessories', rating: 4.2, image: 'src/Wireless Earbuds.avif', description: 'Crystal clear sound with noise cancellation' },
  { id: 4, name: 'Smart Watch', price: 199.99, category: 'Wearables', rating: 4.3, image: 'src/images/watch.jpg', description: 'Track your fitness and stay connected' },
  { id: 5, name: 'Tablet Mini', price: 249.99, category: 'Tablets', rating: 4.0, image: 'src/images/tablet.jpg', description: 'Compact tablet for entertainment on the go' },
  { id: 6, name: 'Bluetooth Speaker', price: 59.99, category: 'Accessories', rating: 4.1, image: 'src/images/speaker.jpg', description: 'Portable speaker with rich bass' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="src/logo.png" alt="Mura Infinity Tech" className="h-10 rounded-full" />
              <Link to="/" className="text-xl font-bold">Mura Infinity Tech</Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200">Home</Link>
              <Link to="/products" className="hover:text-blue-200">Products</Link>
              <Link to="/about" className="hover:text-blue-200">About</Link>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
              <Link to="/login">Login</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                className="relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FaShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Cart Component */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full md:w-1/3 h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <FaTimes size={24} />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <button 
                    className="mt-4 text-blue-600 hover:text-blue-800"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex border-b pb-4">
                        <div className="w-20 h-20 bg-gray-200 flex-shrink-0 mr-4">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-blue-600 font-bold">frw{item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg mb-6">
                      <span>Total:</span>
                      <span>frw{cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mb-2">
                      Proceed to Checkout
                    </button>
                    
                    <button 
                      className="w-full text-blue-600 py-2"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Mura Infinity Tech</h3>
                <p className="text-gray-400">Your trusted electronics retailer in Rwanda</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <address className="not-italic text-gray-400">
                  Rwamagana District<br />
                  Eastern Province, Rwanda<br />
                  Email: info@murainfinitytech.rw<br />
                  Phone: +250 788 123 456
                </address>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-2">Subscribe for updates</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="p-2 text-gray-800 flex-grow"
                  />
                  <button className="bg-blue-600 px-4">Subscribe</button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Mura Infinity Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;