import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import {Card} from '@mui/material';
import {CardMedia} from '@mui/material';
import {Box} from '@mui/material';
import {IconButton} from '@mui/material';
import {ImPrevious} from 'react-icons/im';
import {ImNext} from 'react-icons/im';
import {BsFillPauseBtnFill, BsPauseBtnFill, BsPlayBtnFill} from 'react-icons/bs';
import {BsFillPlayBtnFill} from 'react-icons/bs';

export default function ResourcesPage() {
    const images = [
        {
          image: '/images/foodpantry.png',
          link: 'https://basicneeds.calpoly.edu/foodpantry'
        },
        {
          image: '/images/frontporch.png',
          link: 'https://www.frontporchslo.org'
        },
        {
          image: '/images/healthcenter.png',
          link: 'https://chw.calpoly.edu'
        }
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      // Automatic image scrolling every 3 seconds
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <Box sx = {{display: 'flex', flexDirection: "column", alignItems: "center", m: '20px', justifyContent:'space-around'}}>
      <Typography variant="h1" align="center" gutterBottom color = "#006D82"> Resources </Typography>
        <IconButton onClick={goToPreviousImage}>
        <Typography variant='h2' color={'#0098B5'}><ImPrevious/></Typography>
        </IconButton>
        <Box justifyContent = 'space-between' alignItems = "center">
        <Card sx = {{maxWidth: '1000px', flexGrow: '1', justifyContent: 'space-around'}}>
        <a href={images[currentIndex].link}>
          <CardMedia
            component="img"
            height="500"
            image={images[currentIndex].image}
          />
        </a>
        </Card>
        </Box>
        <IconButton onClick={goToNextImage}>
        <Typography variant='h2' color={'#0098B5'}><ImNext/></Typography>
        </IconButton>
        <IconButton onClick={togglePlayPause}>
          {isPlaying ? <Typography variant='h2' color={'#0098B5'}><BsPauseBtnFill/></Typography> : <Typography variant='h2' color={'#0098B5'}><BsPlayBtnFill/></Typography>}
        </IconButton>
    </Box>
  );
}