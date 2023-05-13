import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
// import CardActions from '@mui/material';
import { useTheme } from '@emotion/react';
import {Box, Typography,Button} from '@mui/material';

function PostComponent() {
  const theme = useTheme();
  return (
    <Card sx = {{maxWidth: 345}}>
    {/* <CardActions> */}
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      {/* </CardActions> */}

    </Card>
  );
}

export default PostComponent