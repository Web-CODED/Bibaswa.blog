/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Popular Category</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height ={32} className={styles.image}
          />
          Civil Service
          </Link>
          <Link href={'/blog'} className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" alt="" width={32} height ={32} className={styles.image}
          />
          Defense
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" alt="" width={32} height ={32} className={styles.image}
          />
          S.S.C
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" alt="" width={32} height ={32} className={styles.image}
          />
          BANKING
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image src="/food.png" alt="" width={32} height ={32} className={styles.image}
          />
         CAT EXAM
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" alt="" width={32} height ={32} className={styles.image}
          />
          AI & CODING
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.english}`}>
          <Image src="/coding.png" alt="" width={32} height ={32} className={styles.image}
          />
          Spoken English
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.law}`}>
          <Image src="/coding.png" alt="" width={32} height ={32} className={styles.image}
          />
          CLAT-UG
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.railway}`}>
          <Image src="/coding.png" alt="" width={32} height ={32} className={styles.image}
          />
          RAILWAY
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.statepsc}`}>
          <Image src="/coding.png" alt="" width={32} height ={32} className={styles.image}
          />
          State PSC's
          </Link>
      </div>
    </div>
  )
}

export default CategoryList
