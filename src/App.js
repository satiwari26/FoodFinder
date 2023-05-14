import React from 'react'
import PostComponent from './components/PostComponent'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Theme.js';
import { app, analytics, db, storage } from './firebase/firebaseConfig';
import { addPost, getPost } from './firebase/firebaseAPI';
import PostPage from './pages/PostPage';
import NavBar from './components/NavBar';
import { Box } from '@mui/system';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
    <div >
    <Box sx={{backgroundColor: '#212121'}}>
    <NavBar/>
      <PostPage/>
    </Box>
    </div>
    </ThemeProvider>
  )
}

export default App