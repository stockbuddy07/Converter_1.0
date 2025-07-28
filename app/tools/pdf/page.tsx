'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const categories = ['All', 'Convert', 'Merge', 'Security', 'Edit'];

const pdfTools = [
  { name: 'PDF to Word', category: 'Convert', icon: 'ri-file-word-line', link: 'pdf/pdf_to_word/page.tsx' },
  { name: 'Word to PDF', category: 'Convert', icon: 'ri-file-pdf-line', link: '/tools/word-to-pdf' },
  { name: 'Merge PDF', category: 'Merge', icon: 'ri-file-merge-line', link: '/tools/merge-pdf' },
  { name: 'Split PDF', category: 'Edit', icon: 'ri-scissors-cut-line', link: '/tools/split-pdf' },
  { name: 'Compress PDF', category: 'Edit', icon: 'ri-archive-line', link: '/tools/compress-pdf' },
  { name: 'PDF to Excel', category: 'Convert', icon: 'ri-file-excel-line', link: '/tools/pdf-to-excel' },
  { name: 'Excel to PDF', category: 'Convert', icon: 'ri-file-pdf-line', link: '/tools/excel-to-pdf' },
  { name: 'PDF to PPT', category: 'Convert', icon: 'ri-slideshow-line', link: '/tools/pdf-to-ppt' },
  { name: 'PPT to PDF', category: 'Convert', icon: 'ri-file-pdf-2-line', link: '/tools/ppt-to-pdf' },
  { name: 'PDF Creator', category: 'Edit', icon: 'ri-add-circle-line', link: '/tools/pdf-creator' },
  { name: 'Rotate PDF', category: 'Edit', icon: 'ri-refresh-line', link: '/tools/rotate-pdf' },
  { name: 'Unlock PDF', category: 'Security', icon: 'ri-lock-unlock-line', link: '/tools/unlock-pdf' },
  { name: 'Protect PDF', category: 'Security', icon: 'ri-lock-line', link: '/tools/protect-pdf' },
  { name: 'PDF to JPG', category: 'Convert', icon: 'ri-image-line', link: '/tools/pdf-to-jpg' },
  { name: 'JPG to PDF', category: 'Convert', icon: 'ri-file-image-line', link: '/tools/jpg-to-pdf' }
];

export default function PDFToolsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = pdfTools.filter((tool) => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300 pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            PDF Conversion Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Convert, merge, compress, and manage your PDFs with our powerful tools.
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-4 mb-10 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid of Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.link}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition group flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    <i className={tool.icon}></i>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {tool.name}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Click to start
                  </span>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
                No tools found.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
