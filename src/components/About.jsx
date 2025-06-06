/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 29/04/2025 - 13:06:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// components/About.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Profile Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative mb-6 group">
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocKbPoCM1oK2aQ-X9iDRRo8SPSI_6DKoqfdtbrZYcsYDPT3WMFwV=s96-c-rg-br100" // Replace with your actual image path
              alt="Mura Infinity Tech"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300 transition-all duration-300"></div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Mura Infinity Tech</h2>
          <p className="text-gray-600 text-center mb-4">Your Technology Partner in Rwanda</p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl transition-colors">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-2xl transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/murainfinitytech" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-2xl transition-colors">
              <FaYoutube />
            </a>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="mailto:info@murainfinitytech.com" 
              className="text-blue-600 hover:underline font-medium"
            >
              info@murainfinitytech.com
            </a>
            <p className="text-gray-600 mt-1">+250 788 123 456</p>
          </div>
        </div>
        
        {/* About Content */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">About Mura Infinity Tech</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Mura Infinity Tech began as a small electronics shop in Rwamagana District, Eastern Province of Rwanda. 
              Our passion for technology and commitment to customer satisfaction quickly helped us grow into one of the region's 
              most trusted electronics retailers.
            </p>
            <p className="text-gray-700">
              Today, we're proud to serve customers across Rwanda through our online platform, offering the latest in consumer 
              electronics with the same dedication to quality and service that started it all.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We believe technology should be accessible, reliable, and enhance people's lives. Our mission is to bridge the digital 
              divide in Rwanda by providing high-quality electronics at competitive prices, backed by exceptional customer service 
              and technical support.
            </p>
          </section>
        </div>
      </div>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Genuine products with manufacturer warranties</span>
          </li>
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Competitive pricing and regular promotions</span>
          </li>
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Fast and reliable delivery across Rwanda</span>
          </li>
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Knowledgeable customer support team</span>
          </li>
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">After-sales service and technical support</span>
          </li>
          <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">Secure online payment options</span>
          </li>
        </ul>
      </section>
      
      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Connect With Us</h3>
        <p className="mb-4">Follow Mura Infinity Tech for the latest products, deals, and tech news</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-400 p-2 rounded-full hover:bg-blue-100 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 p-2 rounded-full hover:bg-pink-100 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com/murainfinitytech" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
