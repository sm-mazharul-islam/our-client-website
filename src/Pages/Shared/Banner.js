 import { Button, Grid, Typography } from '@mui/material';
 import React from 'react';


 const Banner = () => {
    return (
        
        
            <div style={{background:`url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, paddingTop:'90px'}}>
        <Grid container spacing={2}  >
             
                        <Grid item xs={12} md={5}>
                         <Typography variant='h2' sx={{color:'white'}} > Drive your favorite Luxury Car
            
                         
                         </Typography>
                         <Typography sx={{color:'white'}}>The fastest and easiest rental process, drive your favorite car within the next 24 hours</Typography>
                        <Button  variant="contained" color="success" sx={{marginTop:'10px'}}>Talk to a Manager</Button>
                        </Grid>
                        <Grid item xs={12} md={7} >
                        <img style={{width:'100%'}}  src={'https://html.merku.love/rotors/demo_assets/images/banner/img_01.png'} alt=""  />
                   
                          
                        </Grid>

                        </Grid>

        </div>



      
    );
};

export default Banner;




