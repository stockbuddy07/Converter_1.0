'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-orange-400 rounded-full"></div>
          <div className="absolute top-10 right-1/4 w-3 h-3 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-0 left-1/6 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-10 right-1/6 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-5 right-1/3 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-5 left-1/3 w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute top-1/2 right-1/12 w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="absolute top-1/3 left-1/12 w-3 h-3 bg-pink-300 rounded-full"></div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Free Tools to Make{' '}
            <span className="bg-pink-500 text-white px-4 py-2 rounded-lg inline-block">
              Your Life
            </span>{' '}
            Simple
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer PDF, video, image and other online tools to make your life easier
          </p>

          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6 flex items-center justify-center"></i>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}