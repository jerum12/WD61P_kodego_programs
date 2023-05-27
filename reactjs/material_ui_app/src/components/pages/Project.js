import { Container, Divider, Grid, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import Card from './Cards';

function Project() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#987654',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Typography variant="h3" sx={{ marginTop: '20px', paddingTop: '20px' }}>
        Projects
      </Typography>
      <Divider className="divider" />

      <Container>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={4}>
            <Item elevation={3}>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item elevation={3} sm={4}>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item elevation={3} sm={4}>
              <Card />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <Item elevation={3}>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item elevation={3}>
              <Card />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Project;
