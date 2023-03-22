import React, { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts/1/comments";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get(ENDPOINT).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default App;

const Post = ({ post }) => {
  return (
    <div style={{ padding: 10 }}>
      <div>
        <b>Id:</b>
        {post.postId}
      </div>
      <div>
        <b>Email:</b>
        {post.email}
      </div>
      <div>
        <b>Name:</b>
        {post.name}
      </div>
      <div>
        <b>Body:</b>
        {post.body}
      </div>
      <hr />
    </div>
  );
};
