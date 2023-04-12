import React from "react";
import styles from './singlepostpage.module.css'
import postImg from './postimg.png'


const SinglePostPage = () => {
  return (
    <article className={styles.post}>
      <h1 className={styles.title}>My Title</h1>
      <img src={postImg} alt="" className={styles.img} />
      <p className={styles.descr}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ex nam,
        eligendi delectus fugit iure ullam, adipisci debitis quas aliquam eum
        eaque labore distinctio reiciendis laboriosam enim sunt. Explicabo
        fugiat, adipisci qui nisi optio vitae voluptatem numquam cum quam
        consequatur aperiam esse quae vel nihil placeat impedit totam
        consequuntur expedita quis nulla aliquid! Perspiciatis enim expedita
        saepe minus debitis iusto itaque ad deleniti ducimus doloremque corrupti
        sed distinctio, veniam molestiae.
      </p>
      <p className={styles.date}>Published 11 April 2023</p>
    </article>
  );
};

export default SinglePostPage;
