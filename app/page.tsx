
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import StatsSection from '@/components/StatsSection';
import PopularToolsSection from '@/components/PopularToolsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
       <main className="pt-16"></main>
       <ToolsSection />
      <HeroSection />
     
      <StatsSection />
      {/* <PopularToolsSection /> */}
      <Footer />
    </div>
  );
}
