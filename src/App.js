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
import Resources from './pages/resources/Resources.jsx';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
    <div >
    <Box sx={{background: 'linear-gradient(to right,#F5F5F5,#E0E0E0)'}}>
    <NavBar/>
     <PostPage/>
     
      {/* <Resources/> */}
    </Box> 
    </div>
    </ThemeProvider>
  )
}

export default App