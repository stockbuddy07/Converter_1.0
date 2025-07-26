
'use client';

import Link from 'next/link';

export default function ToolsSection() {
  const toolCategories = [
    {
      id: 'pdf',
      title: 'PDF Tools',
      description: 'Solve Your PDF Problems',
      icon: 'ri-file-pdf-2-line',
      color: 'bg-purple-500',
      toolCount: '45+ tools',
      featuredTool: 'PDF Creator',
      link: '/tools/pdf-creator'
    },
    {
      id: 'image',
      title: 'Image Tools',
      description: 'Solve Your Image Problems',
      icon: 'ri-image-line',
      color: 'bg-orange-500',
      toolCount: '30+ tools',
      featuredTool: 'Remove BG',
      link: '/tools/remove-background'
    },
    {
      id: 'video',
      title: 'Video Tools',
      description: 'Solve Your Video Problems',
      icon: 'ri-video-line',
      color: 'bg-pink-500',
      toolCount: '15+ tools',
      featuredTool: 'Mute Video',
      link: '/tools/mute-video'
    },
    {
      id: 'write',
      title: 'AI Write',
      description: 'Solve Your Text Problems',
      icon: 'ri-edit-box-line',
      color: 'bg-blue-500',
      toolCount: '10+ tools',
      featuredTool: 'Paragraph Writer',
      link: '/tools/paragraph-writer'
    },
    {
      id: 'file',
      title: 'File Tools',
      description: 'Solve Your File Problems',
      icon: 'ri-folder-line',
      color: 'bg-teal-500',
      toolCount: '15+ tools',
      featuredTool: 'Split Excel',
      link: '/tools/split-excel'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {toolCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className={`${category.color} text-white p-6 rounded-2xl relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group block`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <i className={`${category.icon} w-5 h-5 flex items-center justify-center`}></i>
                  </div>
                  <span className="text-xs font-medium opacity-90">{category.toolCount}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs opacity-75">Featured Tool:</span>
                    <p className="text-sm font-medium">{category.featuredTool}</p>
                  </div>
                  <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
