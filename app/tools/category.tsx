'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const toolsByCategory = {
  pdf: [
    { name: 'PDF to Word', link: '/tools/pdf_to_word/page' },
    { name: 'Merge PDF', link: '/tools/merge-pdf' },
    { name: 'Split PDF', link: '/tools/split-pdf' },
    { name: 'Compress PDF', link: '/tools/compress-pdf' },
    { name: 'PDF Creator', link: '/tools/pdf-creator' }
  ],
  image: [
    { name: 'Remove Background', link: '/tools/remove-background' },
    { name: 'Image Compressor', link: '/tools/image-compressor' },
    { name: 'Convert to PNG', link: '/tools/convert-to-png' }
  ],
  video: [
    { name: 'Mute Video', link: '/tools/mute-video' },
    { name: 'Video Converter', link: '/tools/video-converter' }
  ],
  write: [
    { name: 'Paragraph Writer', link: '/tools/paragraph-writer' },
    { name: 'AI Blog Writer', link: '/tools/ai-blog-writer' }
  ],
  file: [
    { name: 'Split Excel', link: '/tools/split-excel' },
    { name: 'Merge CSV', link: '/tools/merge-csv' }
  ]
};

export default function CategoryPage() {
  const { category } = useParams();
  const tools = toolsByCategory[category as keyof typeof toolsByCategory] || [];

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category} Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.length > 0 ? (
            tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.link}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold">{tool.name}</h2>
              </Link>
            ))
          ) : (
            <p>No tools found for this category.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
