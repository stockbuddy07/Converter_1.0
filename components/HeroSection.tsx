'use client'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from '../styles/home.module.css'

const HeroSection = () => (
  // === 🎯 HERO SECTION ===
  <section className={styles.heroSection}>
    <h1 className={styles.heroTitle}>
      Free Tools to Make <span className={styles.heroHighlight}>YOUR TASK</span> Simple
    </h1>
    <p className={styles.heroSubtitle}>
      We offer PDF, video, image and other online tools to make your life easier
    </p>
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button className={styles.searchButton}>
          <FiSearch /> Search
        </button>
      </div>
    </div>
  </section>
)

export default HeroSection
