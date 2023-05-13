import React from 'react'
import PostComponent from './components/PostComponent'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Theme.js';
import { app, analytics, db, storage } from './firebase/firebaseConfig';
import { addPost, getPost } from './firebase/firebaseAPI';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
    <div>
      <PostComponent/>
    </div>
    </ThemeProvider>
  )
}

export default App