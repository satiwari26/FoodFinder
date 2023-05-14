import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import PostComponent from '../components/PostComponent';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function PostPage() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
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
      setIsLoading(false);
    }))
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box m = '20px'>
      {isLoading?  <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>:
        <Box display = 'flex' justifyContent = 'space-between' alignItems = "center" flexDirection="column">
            {posts.map((post)=>{return (<PostComponent key = {post.id} title={post.title} body={post.body} postImage={post.postImage}/>)})}
        </Box>
    }
    </Box>
  )
}

export default PostPage