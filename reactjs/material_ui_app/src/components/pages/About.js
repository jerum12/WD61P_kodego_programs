import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import MyGallery from './MyGallery';
import Project from './Project';

function About() {
  //   const pictureStyle = {
  //     width: '300px',
  //     boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  //   };

  return (
    <Box className="about-section" id="About">
      <Typography variant="h3">About</Typography>
      <Divider className="divider" />
      <Typography style={{ fontSize: '25px', marginTop: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing el, sed do eiusmod tempor incididunt ut
        labore et, consectetur adipis, sed Lorem ipsum dolor sit amet, consectetur adipiscing el,
        sed do eiusmod tempor incididunt ut labore et, consectetur adipis, sed
      </Typography>
      {/* <Box
        component="img"
        src="https://kodego.ph/_nuxt/img/banner2.9ead8e9.png"
        alt="Picture"
        style={pictureStyle}
      ></Box> */}
      <MyGallery />
      <Project />
    </Box>
  );
}

export default About;
