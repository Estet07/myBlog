import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import styles from "./postspage.module.css";
import postServices from "../../services/posts";
import Loader from "../../components/Loader";

const PostsPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  useEffect(() => {
    setIsPostsLoading(true)
    postServices.get().then((res) => {
      setPosts(res.data)
      setIsPostsLoading(false)
    } );
  }, []);

  if (isPostsLoading) {
    return <Loader />;
  }

  //вызываем функцию запроса с сервера
  return (
    <section className={styles.posts}>
      {posts.map((post) => {
        const dateString = post.createdAt;
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return (
          <Post
            key={post._id}
            img={post.img}
            date={formattedDate}
            title={post.title}
            descr={post.descr}
            id={post._id}
          />
        );
      })}
    </section>
  );
};

export default PostsPage;
