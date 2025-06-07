// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8 relative overflow-hidden">
        {/* Floating animated elements */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
          <div className="animate-float-slow opacity-30">
            <svg className="w-32 h-32 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="animate-float-delay opacity-30">
            <svg className="w-40 h-40 text-indigo-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Mura Infinity Tech</h1>
          <p className="text-lg mb-6 text-gray-600">Your premier destination for quality electronics in Rwanda</p>

          {/* Promotional cards */}
          <div className="flex flex-wrap gap-4 mb-8">
            {/* Card 1 */}
            <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-center">
                <div className="animate-pulse bg-blue-100 p-3 rounded-full mr-3">
                  <svg 
