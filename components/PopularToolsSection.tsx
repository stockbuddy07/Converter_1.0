'use client'
import React, { useState } from 'react'
import styles from '../styles/home.module.css'
import { filters, toolData } from '../utils/toolData'

const PopularToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Pdf Tools')
  const currentTools =
    activeCategory === 'All Tools'
      ? Object.values(toolData).flat()
      : toolData[activeCategory] || []

  return (
    // === ⭐ POPULAR TOOLS BY CATEGORY ===
    <section className={styles.popularToolsSection}>
      <h2 className={styles.sectionTitle}>Our Most Popular Tools</h2>
      <p className={styles.sectionSubtitle}>We present the best of the best. All free, no catch</p>

      {/* === 🔘 CATEGORY FILTERS === */}
      <div className={styles.toolFilters}>
        {filters.map((filter, i) => (
          <button
            key={i}
            className={`${styles.filterButton} ${filter === activeCategory ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* === 🧰 TOOL CARDS FOR SELECTED CATEGORY === */}
      <div className={styles.toolCardsGrid}>
        {currentTools.map((tool, index) => (
          <div key={index} className={styles.toolCard}>
            <div className={styles.toolIcon}>{tool.icon}</div>
            <h3 className={styles.toolCardTitle}>{tool.title}</h3>
            <span className={styles.toolCardCategory}>{activeCategory}</span>
            <p className={styles.toolCardDescription}>{tool.desc}</p>
          </div>
        ))}
      </div>

      {/* === 🔗 VIEW ALL BUTTON === */}
      <div className="text-center mt-6">
        <button className={styles.viewAllButton}>All {activeCategory}</button>
      </div>
    </section>
  )
}

export default PopularToolsSection
