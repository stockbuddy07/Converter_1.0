'use client'

import { useState } from 'react'

const toolCategories = [
  { name: 'All Tools', id: 'all' },
  { name: 'Pdf Tools', id: 'pdf' },
  { name: 'Video Tools', id: 'video' },
  { name: 'Image Tools', id: 'image' },
  { name: 'Converter Tools', id: 'converter' },
  { name: 'Other Tools', id: 'other' },
  { name: 'AI Write', id: 'ai' },
]

const pdfTools = [
  { title: 'Merge PDF', desc: 'Merge 2 or more PDF files into a single PDF file' },
  { title: 'Edit PDF', desc: 'Free PDF Editor' },
  { title: 'PDF to JPG', desc: 'Convert PDF to JPG and download each page as an image' },
  { title: 'JPG to PDF', desc: 'Upload images and receive as a PDF' },
  { title: 'Compress PDF', desc: 'Lessen the file size of a PDF file' },
  { title: 'Split PDF', desc: 'Split into one or multiple PDF files' },
  { title: 'PDF to Word', desc: 'Convert a PDF to Word Document' },
  { title: 'Word to PDF', desc: 'Convert a Word Document to PDF' },
  { title: 'Unlock PDF', desc: 'Remove the password from a PDF file' },
  { title: 'PDF to Excel', desc: 'Convert from PDF to XLSX' },
  { title: 'PDF to PowerPoint', desc: 'Upload a PDF and download as PowerPoint' },
  { title: 'PNG to PDF', desc: 'Upload images and receive as a PDF' },
]

export default function ToolTabs() {
  const [activeTab, setActiveTab] = useState('pdf')

  return (
    <div className="text-white py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">Our Most Popular Tools</h2>
      <p className="text-center text-gray-400 mt-2 mb-8">
        We present the best of the best. All free, no catch
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {toolCategories.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTab(tool.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === tool.id
                ? 'bg-blue-500 text-white'
                : 'bg-[#1f2937] text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tool.name}
          </button>
        ))}
      </div>

      {/* TOOL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'pdf' &&
          pdfTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-[#1f2937] hover:bg-[#374151] transition p-5 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-bold">{tool.title}</h3>
              <p className="text-sm text-gray-400 mt-1">Pdf Tools</p>
              <p className="text-sm text-gray-300 mt-2">{tool.desc}</p>
            </div>
          ))}
        {activeTab !== 'pdf' && (
          <p className="text-center col-span-full text-gray-500">No tools to show yet.</p>
        )}
      </div>
    </div>
  )
}