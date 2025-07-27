"use client";

import { useState, useRef, useEffect } from "react";
import PopularToolsSection from "./PopularToolsSection";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { title: string; category: string }[]
  >([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const tools = [
    { title: "Essay Writer", category: "AI Write" },
    { title: "Content Improver", category: "AI Write" },
    { title: "Paragraph Writer", category: "AI Write" },
    { title: "AI Image Generator", category: "Image Tools" },
    { title: "Remove Background", category: "Image Tools" },
    { title: "Merge PDF", category: "PDF Tools" },
    { title: "Edit PDF", category: "PDF Tools" },
    { title: "PDF to JPG", category: "PDF Tools" },
    { title: "JPG to PDF", category: "PDF Tools" },
    { title: "Upscale Image", category: "Image Tools" },
    { title: "Compress PDF", category: "PDF Tools" },
    { title: "Paragraph Completer", category: "AI Write" },
  ];

  // Rotating text setup
  const rotatingTexts = ["Everything", "Business", "Education", "Your Life"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setFade(true); // Fade in new text
      }, 300); // match fade duration
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  // Filter suggestions when typing
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = tools.filter((tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 6)); // Limit to 6 suggestions
  }, [searchQuery]);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800 py-0 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex justify-center items-center gap-2 flex-wrap">
  Free Tools to Make
  <span
    className="bg-pink-500 text-white px-4 py-2 rounded-lg inline-block transition-opacity duration-500 text-center"
    style={{
      opacity: fade ? 1 : 0,
      minWidth: '9ch',
      display: 'inline-block'
    }}
  >
    {rotatingTexts[currentIndex]}
  </span>
  Simple
</h1>


            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer PDF, video, image and other online tools to make your
              life easier
            </p>

            {/* Search with Suggestions */}
            <div className="relative max-w-md mx-auto" ref={dropdownRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6 flex items-center justify-center"></i>

              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <ul className="absolute z-10 left-0 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl mt-2 shadow-lg max-h-60 overflow-auto text-left">
                  {suggestions.map((tool, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex justify-between items-center"
                      onClick={() => {
                        setSearchQuery(tool.title);
                        setSuggestions([]);
                        document
                          .getElementById("popular-tools")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="text-gray-900 dark:text-white">
                        {tool.title}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tool.category}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pass searchQuery to PopularToolsSection */}
      <div id="popular-tools">
        <PopularToolsSection searchQuery={searchQuery} />
      </div>
    </>
  );
}
