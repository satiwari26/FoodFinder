import React from 'react';
import { Card,IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
 import {CardActions} from '@mui/material';
import { useTheme } from '@emotion/react';
import {Box, Typography} from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsFillShareFill} from 'react-icons/bs';
import {useState, useEffect} from 'react';
import axios from 'axios';


function PostComponent() {
  const theme = useTheme();

  const [body,setBody] = useState('');
  const [title,setTitle] = useState('');
  const [id,setId] = useState('1');
  const [postImage,setPostImage] = useState('');


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      console.log(res);
      setBody(res.data.body);
      setTitle(res.data.title);
      setId(res.data.id);
    })
    .catch(err => {
      console.log(err);
    });
  },[id]);

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res => {  
      setPostImage(res.data.url);
    })
    .catch(err => {
      console.log(err);
    });   
  
  },[id]);

  const ButtonColor = theme.palette.secondary['500'];
  return (
    <Card sx = {{maxWidth: 600} } >
       <CardMedia
        component="img"
        alt="post image"
        height="240"
        image={postImage}
      />
    <CardActions>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <IconButton color='primary'><AiOutlineHeart/></IconButton>
          <IconButton color='primary'><BsFillShareFill/></IconButton>
        </Box>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" color="primary">
          {title}
        </Typography>
        <Typography variant="body1" color="secondary">
          {body}
        </Typography>
      </CardContent>



    </Card>
  );
}

export default PostComponent