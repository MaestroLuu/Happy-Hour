import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Food() {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto" }}>
      <CardContent style={{textAlign: "center"}} >
        <Typography style={{marginTop: "30px"}} gutterBottom variant="h5" component="div">
          Hamburger
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Nachos
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Loaded Fries
        </Typography>
      </CardContent>
    </Card>
  );
}