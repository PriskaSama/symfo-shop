import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/";

const URL_ = "http://localhost:8000/api/test_posts/";

export const Home = () => {
  const [posts, getAllPosts] = useState([]);
  const [postsSymfony, getAllPostsSymfony] = useState([]);

  const getPostsSymfony = async () => {
    await axios
      .get(`${URL_}`)
      .then((response) => {
        getAllPostsSymfony(response.data["hydra:member"]);
      })
      .catch((error) => {
        error;
      });
  };

  const getPosts = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getAllPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPostsSymfony();
    getPosts();
  }, []);

  return (
    <>
    <Navbar />
      {postsSymfony.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>Votre nom est : {post.name}</li>
              <li>Vous avez {post.age} ans !</li>
            </ul>
          </div>
        );
      })}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>Le tire du post : {post.title}</li>
              <li>Le corps du message : {post.body}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
