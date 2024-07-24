import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to "BIBASWAN EDUCATIONAL FOUNDATION",</b> we craft Exam Tips and Tricks for you.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>About US!</h1>
          <p className={styles.postDesc}>Crack With <b>BIBASWAN EDUCATIONAL FOUNDATION</b>.<br/>  
<b>B.E.F</b> is a structured organisation providing a cutting-edge education that combines innovative learning methods with a strong emphasis on fostering a success-oriented attitude, since 10+ years.
<b>Join BIBASWAN Today!</b></p>
         <button className={styles.button}>Read More</button>
        </div>
      </div>

    </div>
  );
};

export default Featured;
