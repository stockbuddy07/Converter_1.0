'use client' // Marks this as a Client Component in Next.js App Router

import styles from '../styles/home.module.css'

// === 🔼 HEADER ===
import Header from '../components/Header'

// === 🔽 FOOTER ===
import Footer from '../components/Footer'

// === 🎯 HERO SECTION ===
import HeroSection from '../components/HeroSection'

// === 🧩 TOOLS OVERVIEW GRID ===
import ToolsOverviewGrid from '../components/ToolsOverviewGrid'

// === 📊 STATS SECTION ===
import StatsSection from '../components/StatsSection'

// === ⭐ POPULAR TOOLS BY CATEGORY ===
import PopularToolsSection from '../components/PopularToolsSection'

// === ✅ HOME PAGE FUNCTION ===
export default function Home() {
  return (
    <>
      {/* === 📌 HEADER SECTION === */}
      <Header />

      <main className={styles.mainContainer}>
        {/* === 🎯 HERO SECTION === */}
        <HeroSection />

        {/* === 🧩 TOOLS OVERVIEW GRID === */}
        <ToolsOverviewGrid />

        {/* === 📊 STATS SECTION === */}
        <StatsSection />

        {/* === ⭐ POPULAR TOOLS BY CATEGORY === */}
        <PopularToolsSection />
      </main>

      {/* === 📌 FOOTER SECTION === */}
      <Footer />
    </>
  )
}
