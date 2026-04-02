import React, { useState } from 'react';
import Post from "../Post.jsx";
//import Post from '../post'
import {useEffect} from "react";

export default function Indexpage() {
    const[posts,setPosts]=useState([]);
   useEffect(()=>{
        fetch('http://localhost:4000/post').then(response=>{
            response.json().then(posts=>{
                setPosts(posts);
            })
            /*useEffect(() => {
                fetch('http://localhost:4000/post')
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erreur serveur");
                    }
                    return response.json();
                  })
                  .then(posts => {
                    console.log(posts);
                  })
                  .catch(err => {
                    console.error("Erreur:", err);
                  });
              }, []);*/

        })
    },[]);
    return (
        <>
            {posts.length > 0 && posts.map(post =>
                <Post {...post}/>
            )}
        </>
    )
}

