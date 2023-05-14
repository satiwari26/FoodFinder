import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './Theme.js';
import NavBar from './components/NavBar';
import Resources from './pages/resources/Resources';
import PostComponent from './components/PostComponent.js';
import AboutPage from './pages/AboutPage.jsx';
import PostPage from './pages/PostPage.jsx';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Box sx={{ background: 'linear-gradient(to right,#F5F5F5,#E0E0E0)' }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<PostComponent />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create-post" element={<PostPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;