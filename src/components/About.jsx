/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 28/04/2025 - 17:01:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Genuine products with manufacturer warranties</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Competitive pricing and regular promotions</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Fast and reliable delivery across Rwanda</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">Knowledgeable customer support team</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">After-sales service and technical support</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;