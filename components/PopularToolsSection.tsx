'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PopularToolsSection({ searchQuery = '' }: { searchQuery?: string }) {
  const [activeTab, setActiveTab] = useState('All Tools');

  const tabs = [
    { id: 'All Tools', label: 'All Tools', icon: 'ri-apps-line' },
    { id: 'PDF Tools', label: 'PDF Tools', icon: 'ri-file-pdf-line' },
    { id: 'Video Tools', label: 'Video Tools', icon: 'ri-video-line' },
    { id: 'Image Tools', label: 'Image Tools', icon: 'ri-image-line' },
    { id: 'Converter Tools', label: 'Converter Tools', icon: 'ri-exchange-line' },
    { id: 'Other Tools', label: 'Other Tools', icon: 'ri-tools-line' },
    { id: 'AI Write', label: 'AI Write', icon: 'ri-edit-line' }
  ];

  const tools = [
    { title: 'Essay Writer', description: 'Easily create an essay with AI', icon: 'ri-file-text-line', category: 'AI Write', color: 'bg-green-100 text-green-600' },
    { title: 'Content Improver', description: 'Improve your content', icon: 'ri-file-edit-line', category: 'AI Write', color: 'bg-blue-100 text-blue-600' },
    { title: 'Paragraph Writer', description: 'Paragraph Writer', icon: 'ri-file-text-line', category: 'AI Write', color: 'bg-orange-100 text-orange-600', link: '/tools/paragraph-writer' },
    { title: 'AI Image Generator', description: 'AI Image Generator', icon: 'ri-image-line', category: 'Image Tools', color: 'bg-cyan-100 text-cyan-600' },
    { title: 'Remove Background', description: 'Easily Remove the Background from an Image', icon: 'ri-image-line', category: 'Image Tools', color: 'bg-cyan-100 text-cyan-600', link: '/tools/remove-background' },
    { title: 'Merge PDF', description: 'Merge 2 or more PDF files into a single PDF file', icon: 'ri-file-pdf-line', category: 'PDF Tools', color: 'bg-purple-100 text-purple-600' },
    { title: 'Edit PDF', description: 'Free PDF Editor', icon: 'ri-edit-line', category: 'PDF Tools', color: 'bg-orange-100 text-orange-600' },
    { title: 'PDF to JPG', description: 'Convert PDF to JPG and download each page as an image', icon: 'ri-file-pdf-line', category: 'PDF Tools', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'JPG to PDF', description: 'Upload images and receive as a PDF', icon: 'ri-file-pdf-line', category: 'PDF Tools', color: 'bg-blue-100 text-blue-600' },
    { title: 'Upscale Image', description: 'Increase the resolution of your image', icon: 'ri-image-line', category: 'Image Tools', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Compress PDF', description: 'Lessen the file size of a PDF file', icon: 'ri-file-pdf-line', category: 'PDF Tools', color: 'bg-orange-100 text-orange-600' },
    { title: 'Paragraph Completer', description: 'Paragraph Completer', icon: 'ri-file-text-line', category: 'AI Write', color: 'bg-blue-100 text-blue-600' }
  ];

  // Filter by tab
  let filteredTools = activeTab === 'All Tools'
    ? tools
    : tools.filter(tool => tool.category === activeTab);

  // Apply search filter
  if (searchQuery.trim() !== '') {
    filteredTools = filteredTools.filter(tool =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
   <section className="pt-4 pb-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-sm">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <i className={`${tab.icon} w-4 h-4 flex items-center justify-center`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-gray-200 dark:border-gray-700"
              >
                {tool.link ? (
                  <Link href={tool.link} className="block">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}`}>
                        <i className={`${tool.icon} w-6 h-6 flex items-center justify-center`}></i>
                      </div>
                      <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{tool.description}</p>
                  </Link>
                ) : (
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}`}>
                        <i className={`${tool.icon} w-6 h-6 flex items-center justify-center`}></i>
                      </div>
                      <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{tool.description}</p>
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">No tools found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
