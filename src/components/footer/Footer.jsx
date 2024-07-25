/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Bibaswan.Blog" width={70} height={70}/>
          <h1 className={styles.logoText}>Bibaswan.Blog</h1>
        </div>
        <p className={styles.desc}>
        At BIBASWAN EDUCATIONAL FOUNDATION, we teach you to overcome challenges posed by competitive examinations for the State Civil Services, PSC, UPSC, School Service Commission, Banking, Rail, Staff Selection Commission, IAS, IPS so on and so forth.
        </p>
        <div className={styles.icons}>
           <Image src="/facebook.png" alt="" width={18} height={18}/>
           <Image src="/instagram.png" alt="" width={18} height={18}/>
           <Image src="/youtube.png" alt="" width={18} height={18}/>
           <Image src="/telegram.png" alt="" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">UPSC-CSE</Link>
          <Link href="/">SSC & BANK</Link>
          <Link href="/">WBCS</Link>
          <Link href="/">AI & CODING</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Telegram</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
