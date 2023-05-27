import { Box, CircularProgress, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function TableData() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  //let b = 1;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:1111/students');
        const data = await response.json();
        console.log('Loading comments', data);
        setStudents(data.data);
        setLoading(false);
        //b += 1;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchStudents();
    }, 3000);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Honor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students &&
              students.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.section}</TableCell>
                  <TableCell align="right">{row.honor}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
