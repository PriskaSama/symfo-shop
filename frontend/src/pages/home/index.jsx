import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/index";
import axios from "axios";
import process from "process";

const URL = "https://jsonplaceholder.typicode.com/posts/";

const URL_ = "http://localhost:8000/api/test_posts/";

export const Home = () => {
  const [posts, getAllPosts] = useState([]);
  const [postsSymfony, getAllPostsSymfony] = useState([]);

  const getPostsSymfony = async () => {
    await axios
      .get(`${process.env.URL}`)
      .then((response) => {
        getAllPostsSymfony(response.data["hydra:member"]);
      })
      .catch((error) => {
        error;
      });
  };

  const getPosts = async () => {
    await axios
      .get(`${process.env.URL}`)
      .then((response) => {
        getAllPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPostsSymfony();
    getPosts();
    // console.log(window.user);
    // console.log(process);
  }, []);

  // pour avoir access a l'utilisateur depuis le front
  useEffect(() => {
    console.log(window.user);
  }, []);

  return (
    <>
    <Navbar />
      {postsSymfony.map((post) => {
        return (
          <div key={post.id} classeName="bg-pink-500">
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
              <li className="text-red-800">Le tire du post : {post.title}</li>
              <li>Le corps du message : {post.body}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
