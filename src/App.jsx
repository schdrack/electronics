// App.jsx
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaStar, FaFilter, FaTimes, FaBars, FaUser } from 'react-icons/fa';
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
  { id: 1, name: 'Smartphone X', price: 299.99, category: 'Phones', rating: 4.5, image: 'https://sparx.pk/cdn/shop/files/NeoxBrownPTALOGO.jpg?v=1721642419', description: 'Latest smartphone with advanced camera features' },
  { id: 2, name: 'Laptop Pro', price: 899.99, category: 'Laptops', rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7zrdTLnrh2Jdpng7oYD1PAASjAPDP4UFDw&s', description: 'High-performance laptop for professionals' },
  { id: 3, name: 'Wireless Earbuds', price: 79.99, category: 'Accessories', rating: 4.2, image: 'https://i5.walmartimages.com/seo/Wireless-Earbuds-Bluetooth-Headset-Microphone-Touch-Control-IPX7-Waterproof-High-Fidelity-Stereo-Earphones-Sports-Work-Compatible-iPhone-13-Pro-Max-X_ea3905c6-a23d-435d-952f-81b510607ac9.c223f55feb63d91007cc547d80932ba8.jpeg', description: 'Crystal clear sound with noise cancellation' },
  { id: 4, name: 'Smart Watch', price: 199.99, category: 'Wearables', rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplNXkitXTcRw3Nxr_lv2WY05wd_REBnENDw&s', description: 'Track your fitness and stay connected' },
  { id: 5, name: 'Tablet Mini', price: 249.99, category: 'Tablets', rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mzpG5gEZnFPMw3Vg5hhljP6w7AJGNdrOWA&s', description: 'Compact tablet for entertainment on the go' },
  { id: 6, name: 'Bluetooth Speaker', price: 59.99, category: 'Accessories', rating: 4.1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODXxX4H_aHEAEYLo6f36xXAWgQ2yUIQiNBA&s', description: 'Portable speaker with rich bass' },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-40">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button 
                className="md:hidden mr-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBars size={20} />
              </button>
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocKbPoCM1oK2aQ-X9iDRRo8SPSI_6DKoqfdtbrZYcsYDPT3WMFwV=s96-c-rg-br100" 
                alt="Mura Infinity Tech" 
                className="h-10 rounded-full" 
              />
              <Link to="/" className="text-xl font-bold">Mura Infinity Tech</Link>
            </div>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden transition-transform duration-300 ease-in-out`}>
              <div className="bg-white text-gray-800 w-4/5 h-full p-4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <FaTimes size={24} className="text-gray-600" />
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    className="hover:text-blue-600 py-2 border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/products" 
                    className="hover:text-blue-600 py-2 border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link 
                    to="/about" 
                    className="hover:text-blue-600 py-2 border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="hover:text-blue-600 py-2 border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4 border-t border-gray-300">
                    <Link 
                      to="/login" 
                      className="flex items-center text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaUser className="mr-2" /> Login
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200">Home</Link>
              <Link to="/products" className="hover:text-blue-200">Products</Link>
              <Link to="/about" className="hover:text-blue-200">About</Link>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hidden md:block hover:text-blue-200">Login</Link>
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
            <div className="bg-white w-full max-w-md h-full p-4 overflow-y-auto">
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
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto">
                    {cart.map((item, index) => (
                      <div key={index} className="flex border-b pb-4 items-center">
                        <div className="w-16 h-16 bg-gray-200 flex-shrink-0 mr-3 rounded overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-blue-600 font-bold text-sm">frw{item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          className="text-red-500 hover:text-red-700 p-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 sticky bottom-0 bg-white pb-4">
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span>Total:</span>
                      <span>frw{cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-3 font-medium">
                      Proceed to Checkout
                    </button>
                    
                    <button 
                      className="w-full text-blue-600 py-2 font-medium"
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
        <footer className="bg-gray-800 text-white p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="mb-6 sm:mb-0">
                <h3 className="text-lg font-bold mb-3">Mura Infinity Tech</h3>
                <p className="text-gray-400 text-sm">Your trusted electronics retailer in Rwanda</p>
              </div>
              
              <div className="mb-6 sm:mb-0">
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div className="mb-6 sm:mb-0">
                <h4 className="font-semibold mb-3">Contact Us</h4>
                <address className="not-italic text-gray-400 text-sm">
                  Rwamagana District<br />
                  Eastern Province, Rwanda<br />
                  Email: info@murainfinitytech.rw<br />
                  Phone: +250 788 123 456
                </address>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-2">Subscribe for updates</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="p-2 text-gray-800 rounded flex-grow text-sm"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded text-sm whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Mura Infinity Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
