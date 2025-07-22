// components/ToolsOverviewGrid.tsx

'use client'
import React from 'react'
import styles from '../styles/home.module.css'
import { tools } from '../utils/toolData'

const ToolsOverviewGrid = () => {
  return (
    // === 🧩 TOOLS OVERVIEW GRID ===
    <section className={styles.toolGrid}>
      {tools.map((tool, index) => (
        <div key={index} className={`${tool.color} ${styles.toolCard}`}>
          <div className={styles.toolHeader}>
            <div className={styles.toolIcon}>📄</div>
            <span className={styles.toolCount}>{tool.count}</span>
          </div>
          <h2 className={styles.toolTitle}>{tool.title}</h2>
          <p className={styles.toolDescription}>{tool.description}</p>
          <div className={styles.toolFeatured}>
            Featured Tool: <span className={styles.toolFeaturedName}>{tool.featured}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ToolsOverviewGrid
