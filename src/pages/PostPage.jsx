import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import PostComponent from '../components/PostComponent';

function PostPage() {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/photos')
    ])
    .then(axios.spread((postsRes, photosRes) => {
      const combinedData = postsRes.data.map((post, index) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        postImage: photosRes.data[index].url
      }));
      setPosts(combinedData);
    }))
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <Box m = '20px'>
        <Box display = 'flex' justifyContent = 'space-between' alignItems = "center" flexDirection="column">
            {posts.map((post)=>{return (<PostComponent key = {post.id} title={post.title} body={post.body} postImage={post.postImage}/>)})}
        </Box>
    </Box>
  )
}

export default PostPage