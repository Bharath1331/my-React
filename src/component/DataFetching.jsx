import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responsedata = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
        );
        setPost(responsedata.data);

      } catch (error) {
        console.log(`Error fetching ${error}`);
      }
    };

    fetchdata();

  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type ="button" onClick={handleClick} >Fetch Post</button>
      <div>{post.title}</div>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
