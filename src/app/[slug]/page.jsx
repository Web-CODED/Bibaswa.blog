import Comments from "@/components/comments/Comments"
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu"
import Image from "next/image"

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Bibaswan Educational Foundation</span><br/>
                        <span className={styles.date}>20.07.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h2><br/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    
                </div>
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage
