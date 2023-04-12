import React from "react";
import styles from './post.module.css'

const Post = (props) => {
  return (
    <article className={styles.post}>
      <img src={props.img} alt="" className={styles.img} />
      <div className={styles.info}>
        <p className={styles.date}>{props.date}</p>
        <h5 className={styles.title}>{props.title}</h5>
        <p className={styles.descr}>{props.descr}</p>
      </div>
    </article>
  );
};

export default Post;
