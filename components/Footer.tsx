'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    Tools: [
      'PDF Tools',
      'Image Tools',
      'Video Tools',
      'AI Write',
      'File Tools'
    ],
    Popular: [
      'PDF to Word',
      'Image Compressor',
      'Video Converter',
      'QR Generator',
      'Password Generator'
    ],
    Support: [
      'Help Center',
      'Contact Us',
      'FAQ',
      'Bug Report',
      'Feature Request'
    ],
    Company: [
      'About Us',
      'Privacy Policy',
      'Terms of Service',
      'Blog',
      'Careers'
    ]
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
               
              </div>
              <span className="text-xl font-bold">CONVERTER</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
              Free online tools to make your life easier. Convert, compress, and create with ease.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <i className="ri-twitter-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <i className="ri-facebook-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <i className="ri-instagram-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <i className="ri-youtube-line w-5 h-5 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025-26 CONVERTER. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}