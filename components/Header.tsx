"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // ✅ All Mega Menu Items
  const dropdownMenus = {
    PDF: [
      {
        name: "Edit PDF",
        icon: "ri-edit-box-line",
        description: "Edit text & images in PDFs",
      },
      {
        name: "Merge PDF",
        icon: "ri-file-copy-line",
        description: "Combine multiple PDFs",
      },
      {
        name: "Split PDF",
        icon: "ri-scissors-line",
        description: "Split PDF into parts",
      },
      {
        name: "Compress PDF",
        icon: "ri-archive-line",
        description: "Reduce file size",
      },
      {
        name: "PDF to Word",
        icon: "ri-file-word-line",
        description: "Convert to Word",
      },
      {
        name: "PDF to Excel",
        icon: "ri-file-excel-line",
        description: "Convert to Excel",
      },
      {
        name: "PDF to PPT",
        icon: "ri-file-ppt-line",
        description: "Convert to PowerPoint",
      },
      {
        name: "Rotate PDF",
        icon: "ri-refresh-line",
        description: "Rotate pages",
      },
      {
        name: "Add Watermark",
        icon: "ri-water-flash-line",
        description: "Protect your files",
      },
      {
        name: "Protect PDF",
        icon: "ri-lock-line",
        description: "Add password",
      },
    ],
    Image: [
      {
        name: "Image Converter",
        icon: "ri-image-edit-line",
        description: "Convert image formats",
      },
      {
        name: "Image Compressor",
        icon: "ri-compress-line",
        description: "Reduce file size",
      },
      {
        name: "Resize Image",
        icon: "ri-aspect-ratio-line",
        description: "Resize dimensions",
      },
      {
        name: "Remove Background",
        icon: "ri-crop-line",
        description: "AI remove backgrounds",
      },
      {
        name: "Image to PDF",
        icon: "ri-file-transfer-line",
        description: "Convert to PDF",
      },
      {
        name: "Image to Text",
        icon: "ri-text-line",
        description: "Extract text (OCR)",
      },
      {
        name: "Image Enhancer",
        icon: "ri-magic-line",
        description: "Improve quality",
      },
      {
        name: "Image Colorizer",
        icon: "ri-palette-line",
        description: "Colorize B&W photos",
      },
    ],
    Video: [
      {
        name: "Video Converter",
        icon: "ri-video-line",
        description: "Convert video formats",
      },
      {
        name: "Video Compressor",
        icon: "ri-download-line",
        description: "Reduce file size",
      },
      {
        name: "Video Trimmer",
        icon: "ri-scissors-line",
        description: "Cut sections",
      },
      {
        name: "Merge Videos",
        icon: "ri-file-copy-2-line",
        description: "Combine videos",
      },
      {
        name: "Video to GIF",
        icon: "ri-image-2-line",
        description: "Convert to GIF",
      },
      {
        name: "Extract Audio",
        icon: "ri-music-line",
        description: "Convert to MP3",
      },
      {
        name: "Add Subtitles",
        icon: "ri-translate-line",
        description: "Upload or auto-generate",
      },
      {
        name: "Change Speed",
        icon: "ri-speed-line",
        description: "Slow/Fast motion",
      },
    ],
    Write: [
      {
        name: "AI Article Writer",
        icon: "ri-quill-pen-line",
        description: "Create long articles",
      },
      {
        name: "AI Summarizer",
        icon: "ri-file-text-line",
        description: "Summarize text",
      },
      {
        name: "AI Paraphraser",
        icon: "ri-repeat-line",
        description: "Rewrite text",
      },
      {
        name: "Grammar Checker",
        icon: "ri-check-line",
        description: "Fix grammar",
      },
      {
        name: "SEO Meta Generator",
        icon: "ri-seo-line",
        description: "Titles & Descriptions",
      },
      {
        name: "Social Captions",
        icon: "ri-instagram-line",
        description: "Create captions",
      },
      {
        name: "Plagiarism Checker",
        icon: "ri-shield-check-line",
        description: "Check originality",
      },
    ],
  };

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* Trident Logo with Hover Animation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"
            >
              <path d="M256 0c-20 70-60 90-60 90s20 10 40 40l-40 120h-50V130H90v120H40L80 400l-40 40h120l-40-40 40-150h50v150l-40 40h120l-40-40V250h50l40 150-40 40h120l-40-40 40-150h-50V130h-50v120h-50l-40-120c20-30 40-40 40-40s-40-20-60-90z" />
            </svg>

            {/* Brand Text */}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              CONVERTER
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {Object.keys(dropdownMenus).map((menu) => (
              <div key={menu} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap cursor-pointer">
                  <span>{menu}</span>
                  <i
                    className={`ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform ${
                      activeDropdown === menu ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4">
                    <div className="grid gap-2">
                      {dropdownMenus[menu as keyof typeof dropdownMenus].map(
                        (item, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                          >
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                              <i
                                className={`${item.icon} text-blue-600 dark:text-blue-400`}
                              ></i>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-white text-sm">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-blue-600"
            >
              <i
                className={theme === "light" ? "ri-moon-line" : "ri-sun-line"}
              ></i>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
