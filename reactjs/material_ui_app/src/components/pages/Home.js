import { Box, Typography } from '@mui/material';
import React from 'react';
import ReactRotatingText from 'react-rotating-text';

function Home() {
  return (
    <Box className="home-section" id="Home">
      <Typography variant="h4" align="center">
        Hello, My Name is
      </Typography>
      <Typography variant="h2" align="center" className="home-section-h2">
        Kodego Philippines
      </Typography>
      <Typography variant="h3" align="center">
        <ReactRotatingText
          style={{ fontSize: '25px', fontWeight: 'bold' }}
          items={[
            'Full Stack Web Developer',
            'UI & UX Designer',
            'AI Programmer',
            'Android Developer',
          ]}
        />
      </Typography>
    </Box>
  );
}

export default Home;
