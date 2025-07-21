export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
        <div>
          <h2 className="text-2xl font-bold">
            CONVERT<span className="text-blue-400">ER</span>
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            CONVERTER provides free online conversion, pdf, and other handy tools to help you solve problems of all types. All files both processed and unprocessed are deleted after 30 min.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Navigate</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Essay Writer</li>
            <li>Content Improver</li>
            <li>Paragraph Writer</li>
            <li>AI Image Generator</li>
            <li>Remove Background</li>
            <li>Merge PDF</li>
            <li>Edit PDF</li>
            <li>PDF to JPG</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 invisible md:visible">‎</h3> {/* Spacer for symmetry */}
          <ul className="text-sm text-gray-400 space-y-1">
            <li>JPG to PDF</li>
            <li>Upscale Image</li>
            <li>Compress PDF</li>
            <li>Paragraph Completer</li>
            <li>Remove Watermark</li>
            <li>Image To Text</li>
            <li>Split PDF</li>
            <li className="text-blue-400">Others</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <span><strong>CONVERT</strong><a href="#" className="text-blue-400">ER</a></span>
        </div>
        <div className="mt-4 md:mt-0 font-semibold text-white">
          @ 2025 CONVERTER. All rights reserved
        </div>
      </div>
    </footer>
  );
}