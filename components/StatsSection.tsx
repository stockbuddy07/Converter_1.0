'use client'
import React from 'react'
import styles from '../styles/home.module.css'

const StatsSection = () => (
  // === 📊 STATS SECTION ===
  <section className={styles.statsSection}>
    <div className={styles.statsBox}>
      {['Active Users', 'Files Converted', 'Online Tools', 'PDFs Created'].map((label, i) => (
        <div key={i} className={styles.statItem}>
          <span className={styles.statValue}>#</span>
          <span className={styles.statLabel}>{label}</span>
          {i !== 3 && <div className={styles.statDivider} />}
        </div>
      ))}
    </div>
  </section>
)

export default StatsSection
