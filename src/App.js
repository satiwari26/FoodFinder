import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './Theme.js';
import NavBar from './components/NavBar';
import ResourcesPage from './pages/resources/Resources_Final.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PostPage from './pages/PostPage.jsx';
import CreateEvent from './components/CreateEvent.jsx';

const themeDes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themeDes}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Box sx={{ background: 'linear-gradient(to right,#F5F5F5,#E0E0E0)' }}>
          <NavBar />
          <Routes>
          <Route path="/home" element={<PostPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create-post" element={<CreateEvent />} />
            <Route path = "/" element = {<PostPage/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;