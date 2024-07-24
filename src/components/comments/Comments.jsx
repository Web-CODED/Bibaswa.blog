import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image";

const Comments = () => {

const status="authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
       {status==="authenticated" ? (
        <div className={styles.write}>
           <textarea placeholder="write a comment..." className={styles.input} />
           <button className={styles.button}>Send</button>
            </div>
       )   :(
           <Link href="/login">Login to write a comment</Link>
       )}
       <div className={styles.comments}>
        <div className={styles.comments}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Bibaswan Educational Foundation</span>
                    <span className={styles.date}>20.07.24</span>
                </div>
            </div>
            <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p><br/>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Bibaswan Educational Foundation</span>
                    <span className={styles.date}>20.07.24</span>
                </div>
            </div>
            <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p><br/>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Bibaswan Educational Foundation</span>
                    <span className={styles.date}>20.07.24</span>
                </div>
            </div>
            <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p><br/>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Bibaswan Educational Foundation</span>
                    <span className={styles.date}>20.07.24</span>
                </div>
            </div>
            <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
        </div>
       </div>
      </div>
  )
}

export default Comments;
