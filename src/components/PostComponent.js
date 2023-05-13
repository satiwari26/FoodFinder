import React from 'react';
import { Card,IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
 import {CardActions} from '@mui/material';
import { useTheme } from '@emotion/react';
import {Box, Typography} from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsFillShareFill} from 'react-icons/bs';


function PostComponent(props) {
  const {title,body,postImage} = props;
  const theme = useTheme();

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
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
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