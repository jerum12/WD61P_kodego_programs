import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Form from './Form';
import TableData from './TableData';

function Contact() {
  return (
    <Box className="contact-section" style={{ marginTop: '20px' }} id="Contact">
      <Typography variant="h3">Contact Us</Typography>
      <Divider className="divider" />
      <TableData />
      <Form />
    </Box>
  );
}

export default Contact;
