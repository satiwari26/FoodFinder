import React from 'react'
import PostComponent from './components/PostComponent'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Theme.js';
import { app, analytics, db, storage } from './firebase/firebaseConfig';
import { addPost, getPost } from './firebase/firebaseAPI';
import PostPage from './pages/PostPage';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
    <div>
      <PostPage/>
    </div>
    </ThemeProvider>
  )
}

export default App