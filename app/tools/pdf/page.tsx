'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const pdfTools = [
  { name: 'PDF to Word', icon: 'ri-file-word-line', link: '/tools/pdf-to-word' },
  { name: 'Word to PDF', icon: 'ri-file-pdf-line', link: '/tools/word-to-pdf' },
  { name: 'Merge PDF', icon: 'ri-file-merge-line', link: '/tools/merge-pdf' },
  { name: 'Split PDF', icon: 'ri-scissors-cut-line', link: '/tools/split-pdf' },
  { name: 'Compress PDF', icon: 'ri-archive-line', link: '/tools/compress-pdf' },
  { name: 'PDF to Excel', icon: 'ri-file-excel-line', link: '/tools/pdf-to-excel' },
  { name: 'Excel to PDF', icon: 'ri-file-pdf-line', link: '/tools/excel-to-pdf' },
  { name: 'PDF to PPT', icon: 'ri-slideshow-line', link: '/tools/pdf-to-ppt' },
  { name: 'PPT to PDF', icon: 'ri-file-pdf-2-line', link: '/tools/ppt-to-pdf' },
  { name: 'PDF Creator', icon: 'ri-add-circle-line', link: '/tools/pdf-creator' },
  { name: 'Rotate PDF', icon: 'ri-refresh-line', link: '/tools/rotate-pdf' },
  { name: 'Unlock PDF', icon: 'ri-lock-unlock-line', link: '/tools/unlock-pdf' },
  { name: 'Protect PDF', icon: 'ri-lock-line', link: '/tools/protect-pdf' },
  { name: 'PDF to JPG', icon: 'ri-image-line', link: '/tools/pdf-to-jpg' },
  { name: 'JPG to PDF', icon: 'ri-file-image-line', link: '/tools/jpg-to-pdf' }
];

export default function PDFToolsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            PDF Conversion Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Convert, merge, compress, and manage your PDFs with our powerful tools.
          </p>

          {/* Grid of Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pdfTools.map((tool, index) => (
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
