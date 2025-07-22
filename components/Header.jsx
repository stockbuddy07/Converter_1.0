'use client'

import styles from '../styles/home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className="text-white">CONVERT</span>
        <span className="text-blue-400">ER</span>
      </div>
      <nav className={styles.nav}>
        <select className={styles.select}><option>PDF</option></select>
        <select className={styles.select}><option>Image</option></select>
        <select className={styles.select}><option>Write</option></select>
        <select className={styles.select}><option>Video</option></select>
        <select className={styles.select}><option>File</option></select>
      </nav>
      <button>  </button>
    </header>
  )
}
