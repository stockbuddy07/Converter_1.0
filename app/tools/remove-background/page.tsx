
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RemoveBackgroundPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
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
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(file);
    }
  };

  const handleRemoveBackground = async () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessedImage(originalImage);
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-image-line w-8 h-8 flex items-center justify-center text-white"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Remove Background</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Automatically remove backgrounds from images using AI technology
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          {!originalImage ? (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                dragOver
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-image-add-line w-8 h-8 flex items-center justify-center text-orange-600 dark:text-orange-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Upload an image
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Supports JPG, PNG, GIF, and WEBP formats
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap inline-block"
              >
                Select Image
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Original</h3>
                  <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={originalImage}
                      alt="Original"
                      className="w-full h-64 object-contain"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Processed</h3>
                  <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {processing ? (
                      <div className="w-full h-64 flex items-center justify-center">
                        <div className="text-center">
                          <i className="ri-loader-4-line w-8 h-8 flex items-center justify-center animate-spin text-orange-500 mx-auto mb-2"></i>
                          <p className="text-gray-600 dark:text-gray-300">Processing...</p>
                        </div>
                      </div>
                    ) : processedImage ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-transparent bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] dark:bg-[linear-gradient(45deg,#374151_25%,transparent_25%,transparent_75%,#374151_75%,#374151),linear-gradient(45deg,#374151_25%,transparent_25%,transparent_75%,#374151_75%,#374151)]"></div>
                        <img
                          src={processedImage}
                          alt="Processed"
                          className="w-full h-64 object-contain relative z-10"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center">
                        <p className="text-gray-400 dark:text-gray-500">Click process to remove background</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRemoveBackground}
                  disabled={processing}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {processing ? 'Processing...' : 'Remove Background'}
                </button>
                
                {processedImage && !processing && (
                  <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
                    Download Result
                  </button>
                )}
                
                <button
                  onClick={() => {
                    setOriginalImage(null);
                    setProcessedImage(null);
                  }}
                  className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Upload New Image
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-magic-line w-6 h-6 flex items-center justify-center text-orange-600 dark:text-orange-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Powered</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Advanced AI technology for precise background removal
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line w-6 h-6 flex items-center justify-center text-orange-600 dark:text-orange-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Processing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get results in seconds, not minutes
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-hd-line w-6 h-6 flex items-center justify-center text-orange-600 dark:text-orange-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">High Quality</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Maintain original image quality and resolution
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
