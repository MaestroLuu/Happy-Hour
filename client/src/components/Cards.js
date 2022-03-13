import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Restaurant from './Restaurant.jpeg';

export default function Cards() {
  return (
    <div>
    <Card sx={{ maxWidth: 345, mx: "auto"}}>
      <CardMedia
        component="img"
        height="200"
        image={Restaurant}
        alt="restaurant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Restaurant Name
        </Typography>
        <Typography variant="body2" color="text.primary">
          Food () Drink ()
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address Blvd, San Diego, CA 92104
        </Typography>
        <Typography variant="body2" color="text.primary">
          Happy Hours: 5PM - 7PM
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
}