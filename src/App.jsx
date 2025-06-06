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
  { id: 1, name: 'Smartphone X', price: 299.99, category: 'Phones', rating: 4.5, image: 'data:image/jpeg;base64,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', description: 'Latest smartphone with advanced camera features' },
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
