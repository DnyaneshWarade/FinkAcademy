import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testapi() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        console.log(response.data)
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>{JSON.stringify(posts)}</div>

  )
 
}