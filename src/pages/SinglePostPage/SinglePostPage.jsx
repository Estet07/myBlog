import React, { useState, useEffect } from "react";
import styles from "./singlepostpage.module.css";
import { useParams } from "react-router-dom";
import postServices from "../../services/posts";
import Loader from "../../components/Loader";

const SinglePostPage = (props) => {
  const [post, setPost] = useState({});
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    document.documentElement.scroll({
      top: "0",
      behavior: "smooth"
    });
    setIsPostLoading(true);
    postServices.getPost(id).then((res) => {
      setPost(res.data);
      setIsPostLoading(false);
    });
  }, []);

  const date = new Date(post.createdAt);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  if (isPostLoading) {
    return <Loader />;
  }
  return (
    <article className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.img} alt="" className={styles.img} />
      <p className={styles.descr}>{post.descr}</p>
      <p className={styles.date}>{formattedDate}</p>
      <p>Категории: {post.categories}</p>
    </article>
  );
};

export default SinglePostPage;
