import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container, Typography } from '@mui/material';
import ShowFirstPart from './ShowFirstPart';
import '../Extra/ExtraPart.css'
import CountUp from 'react-countup';

const firstExtra = [
    {
        id: 1,
        name: 'OIL CHANGES',
        about: 'Voluptatem perspiciatis sed ut unde omnis iste natus error sit acantium doloremque laudantium.',

    },
    {
        id: 2,
        name: 'AFFORDABLE',
        about: 'Laudantium perspiciatis sed ut unde omnis iste natus error sit voluptatem acantium doloremque.',

    },
    {
        id: 3,
        name: 'AIR CONDITIONING',
        about: 'Natus perspiciatis sed ut unde omnis iste error sit voluptatem acantium doloremque laudantium.',

    },
    {
        id: 4,
        name: 'TRANMISSION',
        about: 'Omnis perspiciatis sed ut unde iste natus error sit voluptatem acantium doloremque laudantium.',

    },
    {
        id: 5,
        name: 'FREE SUPPORT',
        about: 'Omnis sed ut perspiciatis unde iste natus error sit voluptatem acantium doloremque laudantium.',

    },
    {
        id: 6,
        name: 'DEALERSHIP',
        about: 'Error sed ut perspiciatis unde omnis iste natus sit voluptatem acantium doloremque laudantium.',

    }

]





const ExtraPart = () => {


    return (
  
        <div className=" fullPart">
            <Container   >



                <Grid container spacing={2} sx={{ paddingTop: '40px' }} >
                    {
                        firstExtra.map(example =><Grid item xs={12} sm={4} md={4}> <ShowFirstPart
                            key={example.id}
                            example={example}
                        ></ShowFirstPart> 
                        </Grid>
                        )
                    }
                </Grid>
            </Container>
<Grid container spacing={2}>
<Grid item xs={6} md={4} >

<Typography variant='h4' sx={{ marginTop: '20px' }}>
<CountUp style={{ color: 'white' }}

start={150} end={10000} duration={12} prefix="users: " decimals={2}></CountUp>
</Typography>

</Grid>
<Grid item xs={6} md={4} >

<Typography variant='h4' sx={{ marginTop: '20px' }}>
<CountUp style={{ color: 'white' }}

end={50000} duration={10} prefix="reach: "></CountUp>
</Typography>

</Grid>
<Grid item xs={12} md={4} >

<Typography variant='h4' sx={{ marginTop: '20px' }}>
<CountUp style={{ color: 'white' }}

end={10000} duration={11} prefix="Super Car :" suffix="+"></CountUp>
</Typography>

</Grid>

</Grid>

            {/* <Typography variant='h4' sx={{ marginTop: '20px' }}>

                <CountUp style={{ color: 'white', paddingRight: '450px' }}

                    start={150} end={10000} duration={12} prefix="users: " decimals={2}></CountUp>
                <CountUp style={{ color: 'white' }}

                    end={50000} duration={10} prefix="reach: "></CountUp>
                <CountUp style={{ color: 'white', paddingLeft: '450px' }}

                    end={10000} duration={11} prefix="Super Car :" suffix="+"></CountUp>

            </Typography> */}
        </div>
   
    );
};

export default ExtraPart;