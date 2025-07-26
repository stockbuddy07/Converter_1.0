
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SplitExcelPage() {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [splitMethod, setSplitMethod] = useState('sheets');
  const [splitValue, setSplitValue] = useState('');
  const [processing, setProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const splitMethods = [
    { value: 'sheets', label: 'Split by Sheets' },
    { value: 'rows', label: 'Split by Number of Rows' },
    { value: 'column', label: 'Split by Column Value' }
  ];

  const handleFileUpload = (file: File) => {
    if (file.type.includes('spreadsheet') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      setExcelFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleSplitExcel = async () => {
    setProcessing(true);
    
    setTimeout(() => {
      const mockResults = [
        'Sheet1_data.xlsx',
        'Sheet2_data.xlsx',
        'Sheet3_data.xlsx'
      ];
      setResults(mockResults);
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-folder-line w-8 h-8 flex items-center justify-center text-white"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Split Excel</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Split Excel files into multiple files based on sheets, rows, or column values
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          {!excelFile ? (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                dragOver
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-excel-line w-8 h-8 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Upload Excel file
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Supports .xlsx and .xls formats
              </p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                className="hidden"
                id="excel-upload"
              />
              <label
                htmlFor="excel-upload"
                className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Select Excel File
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center">
                    <i className="ri-file-excel-line w-6 h-6 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{excelFile.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {(excelFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={() => setExcelFile(null)}
                    className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Split Method
                </label>
                <select
                  value={splitMethod}
                  onChange={(e) => setSplitMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white pr-8"
                >
                  {splitMethods.map((method) => (
                    <option key={method.value} value={method.value}>
                      {method.label}
                    </option>
                  ))}
                </select>
              </div>

              {splitMethod === 'rows' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Rows per file
                  </label>
                  <input
                    type="number"
                    value={splitValue}
                    onChange={(e) => setSplitValue(e.target.value)}
                    placeholder="Enter number of rows per file"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              )}

              {splitMethod === 'column' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Column name
                  </label>
                  <input
                    type="text"
                    value={splitValue}
                    onChange={(e) => setSplitValue(e.target.value)}
                    placeholder="Enter column name to split by"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              )}

              <div className="text-center">
                <button
                  onClick={handleSplitExcel}
                  disabled={processing || (splitMethod !== 'sheets' && !splitValue)}
                  className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {processing ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin mr-2"></i>
                      Processing...
                    </span>
                  ) : (
                    'Split Excel File'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generated Files</h3>
            <div className="space-y-3">
              {results.map((filename, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center">
                      <i className="ri-file-excel-line w-5 h-5 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{filename}</span>
                  </div>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer">
                    Download
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Download All Files
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-scissors-line w-6 h-6 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multiple Split Options</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Split by sheets, rows, or column values
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-copy-line w-6 h-6 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preserve Formatting</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Maintain original Excel formatting and structure
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-download-line w-6 h-6 flex items-center justify-center text-teal-600 dark:text-teal-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Batch Download</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Download all split files at once
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
