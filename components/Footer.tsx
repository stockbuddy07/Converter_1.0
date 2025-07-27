"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    Tools: [
      "PDF Tools",
      "Image Tools",
      "Video Tools",
      "AI Write",
      "File Tools",
    ],
    Popular: [
      "PDF to Word",
      "Image Compressor",
      "Video Converter",
      "QR Generator",
      "Password Generator",
    ],
    Support: [
      "Help Center",
      "Contact Us",
      "FAQ",
      "Bug Report",
      "Feature Request",
    ],
    Company: [
      "About Us",
      "Privacy Policy",
      "Terms of Service",
      "Blog",
      "Careers",
    ],
  };

  return (
<footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"
                >
                  <path d="M256 0c-20 70-60 90-60 90s20 10 40 40l-40 120h-50V130H90v120H40L80 400l-40 40h120l-40-40 40-150h50v150l-40 40h120l-40-40V250h50l40 150-40 40h120l-40-40 40-150h-50V130h-50v120h-50l-40-120c20-30 40-40 40-40s-40-20-60-90z" />
                </svg>
              </div>
              <span className="text-xl font-bold">CONVERTER</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
              Free online tools to make your life easier. Convert, compress, and
              create with ease.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "youtube"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                >
                  <i
                    className={`ri-${icon}-line w-5 h-5 flex items-center justify-center`}
                  ></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-sm"
>
  © 2025 CONVERTER. All rights reserved.
</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <Link
                    key={policy}
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {policy}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
