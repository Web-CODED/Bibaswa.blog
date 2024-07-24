import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>20.07.2024 - </span>
              <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </Link>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged......
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card
