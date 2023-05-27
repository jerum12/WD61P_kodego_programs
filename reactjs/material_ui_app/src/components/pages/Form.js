import { Alert, Box, Button, Container, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    message: '',
  });

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnchange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const callBackEnd = async () => {
    try {
      const api = await fetch('http://localhost:1111/contact-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await api.json();
      console.log('result', result);
      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '') {
      setErrorMessage('Name is required!');
      setHasError(true);
    } else if (formData.address === '') {
      setErrorMessage('Address is required!');
      setHasError(true);
    } else if (formData.email === '') {
      setErrorMessage('Email is required!');
      setHasError(true);
    } else if (formData.message === '') {
      setErrorMessage('Message is required!');
      setHasError(true);
    } else {
      setHasError(false);

      if (callBackEnd()) {
        setFormData({ name: '', address: '', email: '', message: '' });

        toast.success('Contact Form Successfully Saved!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }

    console.log('Submit', formData);
  };

  return (
    <Container>
      <Box component="form">
        <Grid container spacing={4} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8024582412127!2d121.04624777584328!3d14.55328627823177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1685156338422!5m2!1sen!2sph"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>

        {hasError ? (
          <Alert severity="error" style={{ marginTop: '20px' }}>
            {errorMessage}
          </Alert>
        ) : (
          ''
        )}

        <Grid container spacing={4} style={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Name"
              name="name"
              onChange={handleOnchange}
              value={formData.name}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Address"
              variant="outlined"
              name="address"
              onChange={handleOnchange}
              value={formData.address}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              name="email"
              id="outlined-required"
              label="Email"
              onChange={handleOnchange}
              value={formData.email}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Message"
              variant="outlined"
              name="message"
              onChange={handleOnchange}
              value={formData.message}
            />
          </Grid>
        </Grid>

        <Stack
          spacing={2}
          direction="row"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
        <ToastContainer />
      </Box>
    </Container>
  );
}
