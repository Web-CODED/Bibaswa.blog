import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./menuPosts.module.css"

const MenuPost = ({withImage}) => {
  return (
    <div>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage &&(
            <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>UPSC-CSE</span>
          <h3 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bibaswan Edu</span>
            <span className={styles.date}> - 20.07.2024</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(
            <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>SSC-CGL</span>
          <h3 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bibaswan Edu</span>
            <span className={styles.date}> - 20.07.2024</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage &&(
            <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>UPSC-NDA</span>
          <h3 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bibaswan Edu</span>
            <span className={styles.date}> - 20.07.2024</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        
        {withImage &&(
            <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>AI & CODING</span>
          <h3 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bibaswan Edu</span>
            <span className={styles.date}> - 20.07.2024</span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPost
