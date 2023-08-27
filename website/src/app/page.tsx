"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputTextField from './Components/TextField'
import Paper from '@mui/material/Paper';
import BasicCard from './Components/Card'

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
        <Paper elevation={3}>
          <Card> 
            
     
          </Card>
          <BasicCard/>
          </Paper>
        </Box>
      </Container>
    </main>
  );
} 