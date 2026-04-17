{/*import React from 'react'

function PostPage() {
  return (
    <div>
      <p>post pgae here</p>
    </div>
  )
}

export default PostPage */}


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams(); // récupérer id dans URL

  useEffect(() => {
    fetch(`${API_URL}/post?id=${id}`)
      .then(res => res.json())
      .then(data => {
        // ⚠️ ton backend retourne un tableau
        setPost(data[0]);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-page">
      <h1>{post.title}</h1>

      <p className="info">
        <span>{post.author?.username}</span>
        <time>{new Date(post.createdAt).toLocaleString()}</time>
      </p>

      <div className="image">
        <img src={post.cover} alt="" />
      </div>

      <p className="summary">{post.summary}</p>

      {/* contenu HTML */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostPage;
