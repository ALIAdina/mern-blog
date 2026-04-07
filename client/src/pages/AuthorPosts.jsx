import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../Post";
import { API_URL } from "../config";

export default function AuthorPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/post?author=${id}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [id]);

  return (
    <div>
      {posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  );
}