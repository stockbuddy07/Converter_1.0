    'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function PDFToWord() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setDownloadLink(null);
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setLoading(true);
    
    // Simulate conversion (replace with real API)
    setTimeout(() => {
      setLoading(false);
      setDownloadLink('/sample-converted.docx');
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="pt-28 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Convert PDF to Word</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Upload your PDF and convert it into an editable Word document instantly.
          </p>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 mb-6 bg-white dark:bg-gray-800">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-600 font-semibold hover:underline"
            >
              {file ? `Selected: ${file.name}` : 'Click to Upload PDF'}
            </label>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleConvert}
            disabled={!file || loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Converting...' : 'Convert to Word'}
          </button>

          {/* Download Link */}
          {downloadLink && (
            <div className="mt-6">
              <a
                href={downloadLink}
                download
                className="text-green-600 font-semibold hover:underline"
              >
                Download Converted File
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
