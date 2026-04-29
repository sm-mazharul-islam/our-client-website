import React, { } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Button, Grid, Rating, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import './ServiceCard.css'

const ServiceCard = ({ article }) => {
    const { _id, name, picture, price, rating } = article
    // console.log(props.article);
    return (
 
            <div>
            <Grid  >
                <Card sx={{ maxWidth: 345 }} className='card1'  >
            
                    <CardMedia
                        component="img"
                        height="194"
                        image={picture}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography
                            variant="body2" color="text.secondary" style={{ color: 'black', paddingBottom: '5px', fontSize:'20px' }}>
                            {/* Brand Name :  */}
                            <b> {name} </b>
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary">
                            {/* Description : {about} */}
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary"
                            style={{ color: 'black', paddingTop: '5px', fontSize:'20px'}}
                        >
                            Price : <b style={{ fontSize:'30px' }}> {price} </b>
                        </Typography>
                        <Stack spacing={1}  style={{ marginLeft: '95px' }}>
                            <Rating sx={{color:'blue'}} name="half-rating"  defaultValue={rating} precision={0.5} readOnly />

                        </Stack>
                    </CardContent>

                    <Stack spacing={2}>
                        <Link
                            style={{ textDecoration: 'none', display: "block", paddingBottom: "40px" }}
                            to={`/details/${_id}`}>
                            <Button style={{background:'blue', color:'white'}} className='btn2'>See Details</Button>
                        </Link>
                    </Stack>
                </Card>
            </Grid>
            
        </div>


    )

};

export default ServiceCard;

