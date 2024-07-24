import React from 'react'
import Link from 'next/link'
import styles from "./menuCategories.module.css"
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" 
        className={`${styles.categoryItem} ${styles.style}`}
        >
        AI & Coding
        </Link>
        <Link href="/blog" 
        className={`${styles.categoryItem} ${styles.fashion}`}
        >
        Spoken English
        </Link>
        <Link href="/blog" 
        className={`${styles.categoryItem} ${styles.food}`}
        >
        UPSC-NDA
        </Link>
        <Link href="/blog" 
        className={`${styles.categoryItem} ${styles.travel}`}
        >
        WBCS
        </Link>
        <Link href="/blog" 
        className={`${styles.categoryItem} ${styles.culture}`}
        >
        IIT-JEE
        </Link>
        <Link href="/blog" 
        className={`${styles.categoryItem} ${styles.coding}`}
        >
        UPSC-CSE
        </Link>
      </div>
  )
}

export default MenuCategories
