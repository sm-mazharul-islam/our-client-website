import { Grid, Typography } from '@mui/material';
import React from 'react';

const ThirdExtraPart = () => {
    return (
        <div>
            <Typography variant='h4'> <b>Reserve you Favorite Car and Drive it <span style={{color:'blue'}}>Today</span> </b> </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
    <Grid item xs={12} sm={4} md={4} style={{ marginTop:'400px'}}>
        <img style={{width:'40%'}} src="https://www.nicepng.com/png/detail/340-3406804_blue-bmw-m2-coupe-car-png-image-pngpix.png" alt="" />
  <h2>Engines are one of the main parts on a car, No car can work without an engine. There are two different types of car engines one is gas turbine and the other is diesel engines. There is also an external combustion engine for example a steam boat or train. For internal combustion engines if you put a high energy gas in a small, enclosed space and ignite it, it will have an incredible amount of energy released.</h2>
    </Grid>
    <Grid item xs={12} sm={4} md={4} style={{marginTop:'150px', marginBottom:'150px' }} >
     <img  style={{ width:'450px'}} src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2013/06/18.png.webp" alt="" />
    </Grid>
    <Grid item xs={12} sm={4} md={4}  style={{ marginTop:'400px'
}} >
        <img style={{width:'40%'}} src="https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2018MBS230001/2018MBS23000101.jpg" alt="" />
  <h2>The first step is the piston will start at the top then the intake valve will open and the piston will move down to let the engine take in a cylinder that is filled with air and gas. This is an intake stroke; you only need a very small drop of gas to be mixed in to the air for this to work. The second step is the piston will then move
Another main engine part is a spark plug </h2>
    </Grid>

</Grid>
        </div>
    );
};

export default ThirdExtraPart;