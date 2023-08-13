import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./TravelCart.css";

function CardComponent(props) {
    const { imageUrl, title, content, buttonText } = props;
  console.log(imageUrl);
    return (
        <Card className='cart'>
            <CardContent>
              <Typography variant="h5" component="div">
                ""
              </Typography>
              <Typography variant="body2">
               ""
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ backgroundColor: '#ff5722', color: 'white' }} variant="contained">
                {props.buttonText}
              </Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;