import React, { useState, useEffect } from "react";
import styles from './singlepostpage.module.css'
import { useParams } from "react-router-dom";
import postServices from '../../services/posts'

const SinglePostPage = (props) => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    postServices.getPost(id).then((res) => setPost(res.data));
  }, []);
  
    const dateString = post.createdAt;
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <article className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.img} alt="" className={styles.img} />
      <p className={styles.descr}>{post.descr}</p>
      <p className={styles.date}>{formattedDate}</p>
    </article>
  );
};

export default SinglePostPage;
