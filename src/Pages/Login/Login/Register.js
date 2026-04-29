import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login/Register.css'
import UseAuth from '../../../Hooks/UseAuth';





const Register = () => {
    const { user, registerUser, isLoading, authError } = UseAuth();
    const [regData, setRegData] = useState({});

    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...regData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setRegData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (regData.password !== regData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(regData.email, regData.password, regData.name, navigate);
        console.log(regData.name);

        e.preventDefault();
    }
    return (
        <>

            <Container className='from' sx={{ width: 350 }} >
                <Grid container spacing={2} >
                    <Grid item sx={{ mt: 8 }} xs={12} md={12} >
                        {/* <Typography component="h1" variant="h5">
                            Register
                        </Typography> */}
                        <Typography component="h1" variant="h5" sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Avatar src="/broken-image.jpg" />
                        </Typography>

                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Name"
                                name="name"
                                type="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ margin: "50px", backgroundColor: "black" }} variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}


                    </Grid>
                </Grid>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}

            </Container>

        </>

    );
};

export default Register;