'use client'

import { useState } from 'react'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#111827] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            <span>CONVERT</span>
            <span className="text-blue-400">ER</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition">PDF Tools</a>
          <a href="#" className="hover:text-blue-400 transition">Video Tools</a>
          <a href="#" className="hover:text-blue-400 transition">Image Tools</a>
          <a href="#" className="hover:text-blue-400 transition">AI Write</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1f2937] py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:text-blue-400 transition">PDF Tools</a>
            <a href="#" className="hover:text-blue-400 transition">Video Tools</a>
            <a href="#" className="hover:text-blue-400 transition">Image Tools</a>
            <a href="#" className="hover:text-blue-400 transition">AI Write</a>
          </nav>
        </div>
      )}
    </header>
  )
}