import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Services/ServiceCard';











const Homes = () => {

    const [cycle, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setData(data.slice(3,9)))
    }, [])

    return (

        <>
            <Container>
                <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px', paddingBottom: '50px' }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        {
                            cycle.map(article => <Grid item xs={12} sm={4} md={4}>
                                <ServiceCard article={article}></ServiceCard>

                            </Grid>)
                        }

                    </Grid>
                </Box>
            </Container>
           
          

        </>



    );
};

export default Homes;