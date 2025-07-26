
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const dropdownMenus = {
    PDF: [
      { name: 'PDF to Word', icon: 'ri-file-word-line', description: 'Convert PDF to editable Word document' },
      { name: 'PDF to Excel', icon: 'ri-file-excel-line', description: 'Convert PDF to Excel spreadsheet' },
      { name: 'PDF to PPT', icon: 'ri-file-ppt-line', description: 'Convert PDF to PowerPoint presentation' },
      { name: 'Merge PDF', icon: 'ri-file-copy-line', description: 'Combine multiple PDFs into one' },
      { name: 'Split PDF', icon: 'ri-scissors-line', description: 'Split PDF into separate files' },
      { name: 'Compress PDF', icon: 'ri-archive-line', description: 'Reduce PDF file size' }
    ],
    Image: [
      { name: 'Image Compressor', icon: 'ri-image-line', description: 'Reduce image file size' },
      { name: 'Image Converter', icon: 'ri-image-edit-line', description: 'Convert between image formats' },
      { name: 'Image Resizer', icon: 'ri-aspect-ratio-line', description: 'Resize images to any dimension' },
      { name: 'Background Remover', icon: 'ri-crop-line', description: 'Remove image backgrounds' },
      { name: 'Image Editor', icon: 'ri-edit-line', description: 'Edit and enhance images' },
      { name: 'Photo Filters', icon: 'ri-contrast-line', description: 'Apply filters to photos' }
    ],
    Write: [
      { name: 'AI Writer', icon: 'ri-quill-pen-line', description: 'Generate content with AI' },
      { name: 'Grammar Checker', icon: 'ri-check-line', description: 'Check and fix grammar errors' },
      { name: 'Paraphraser', icon: 'ri-repeat-line', description: 'Rewrite text in different ways' },
      { name: 'Summarizer', icon: 'ri-file-text-line', description: 'Create summaries of long text' },
      { name: 'Translation', icon: 'ri-translate-line', description: 'Translate text between languages' },
      { name: 'Word Counter', icon: 'ri-calculator-line', description: 'Count words and characters' }
    ],
    Video: [
      { name: 'Video Converter', icon: 'ri-video-line', description: 'Convert video formats' },
      { name: 'Video Compressor', icon: 'ri-video-download-line', description: 'Reduce video file size' },
      { name: 'Video Editor', icon: 'ri-movie-line', description: 'Edit and trim videos' },
      { name: 'Audio Extractor', icon: 'ri-music-line', description: 'Extract audio from videos' },
      { name: 'Video Merger', icon: 'ri-file-copy-2-line', description: 'Combine multiple videos' },
      { name: 'GIF Maker', icon: 'ri-image-2-line', description: 'Create GIFs from videos' }
    ],
    File: [
      { name: 'File Converter', icon: 'ri-file-transfer-line', description: 'Convert between file formats' },
      { name: 'File Compressor', icon: 'ri-folder-zip-line', description: 'Compress files and folders' },
      { name: 'Password Generator', icon: 'ri-lock-line', description: 'Generate secure passwords' },
      { name: 'QR Code Generator', icon: 'ri-qr-code-line', description: 'Create QR codes' },
      { name: 'URL Shortener', icon: 'ri-link-line', description: 'Shorten long URLs' },
      { name: 'Color Picker', icon: 'ri-palette-line', description: 'Pick colors from images' }
    ]
  };

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  if (!mounted) {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Converter</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
             
              <span className="text-xl font-bold text-gray-900 dark:text-white">CONVERTER</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {Object.keys(dropdownMenus).map((menu) => (
              <div 
                key={menu} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap cursor-pointer"
                >
                  <span>{menu}</span>
                  <i className={`ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`}></i>
                </button>
                
                {activeDropdown === menu && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="p-4">
                      <div className="grid gap-2">
                        {dropdownMenus[menu as keyof typeof dropdownMenus].map((item, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                          >
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                              <i className={`${item.icon} w-4 h-4 flex items-center justify-center text-blue-600 dark:text-blue-400`}></i>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                <i className={`${theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} w-5 h-5 flex items-center justify-center`}></i>
              </button>
              <button className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                <i className="ri-share-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4 flex items-center justify-center"></i>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Sign In
            </button>

            <button 
              className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-gray-600 dark:text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">PDF</Link>
              <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Image</Link>
              <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Write</Link>
              <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">Video</Link>
              <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">File</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
