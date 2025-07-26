'use client'

import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaShareAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const menus = [
    { name: 'PDF', sub: ['Merge PDF', 'Split PDF', 'Compress PDF'] },
    { name: 'Image', sub: ['Convert to JPG', 'Resize Image', 'Compress Image'] },
    { name: 'Write', sub: ['Text Editor', 'AI Writer', 'Grammar Check'] },
    { name: 'Video', sub: ['Video to MP4', 'Compress Video'] },
    { name: 'File', sub: ['ZIP Extractor', 'Convert CSV', 'File Repair'] }
  ]

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-black dark:text-white font-bold text-lg">Tiny</span>
            <span className="text-blue-500 font-bold text-lg">Wow</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menus.map((menu, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-700 dark:text-gray-200 font-medium hover:text-black dark:hover:text-white flex items-center">
                  {menu.name}
                  <span className="ml-1">&#9662;</span>
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded w-40">
                  {menu.sub.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <FaShareAlt />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded px-4 py-1 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-gray-200">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-4">
            {menus.map((menu, index) => (
              <div key={index}>
                <details>
                  <summary className="cursor-pointer text-gray-700 dark:text-gray-200 font-medium py-2 border-b border-gray-200 dark:border-gray-700">
                    {menu.name}
                  </summary>
                  <div className="pl-4">
                    {menu.sub.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block py-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </details>
              </div>
            ))}

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FaShareAlt />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </div>
        )}
      </header>

      {/* Main Content with Padding */}
      <main className="pt-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="text-center text-black dark:text-white py-20">
          <h1 className="text-4xl font-bold">Your Content Goes Here</h1>
          <p className="mt-4 text-lg">Dark/Light mode is fully controlled by header toggle.</p>
        </div>
      </main>
    </>
  )
}
