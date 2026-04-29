import {  Container, Grid} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard';




const LoadData = () => {

    const [cycle, setCycle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/addProducts')
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [])



    return (
        <>
            {/* <h2>Added Admin Demo</h2> */}
            <Container>
                <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px', paddingBottom: '50px' }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        {
                            cycle.map(article => <Grid item xs={2} sm={4} md={4}>
                                <ServiceCard article={article}></ServiceCard>

                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Container>
            {/* <Footer></Footer> */}
        </>
    );
};
export default LoadData;