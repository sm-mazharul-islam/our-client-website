import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import '../Login/Login.css'







const Login = () => {
    const { signUsingGoogle, loginUser, user, isLoading, authError, token } = UseAuth()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    let location = useLocation();
    let navigate = useNavigate();

    const handleLoginSubmit = e => {
        console.log(loginData);
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signUsingGoogle(location, navigate)
        // console.log(location);
    }
    // if(token){
    //     navigate('/services')
    // }
    return (
        <>

            <Container sx={{ width: 350 }} className="edit">
                <Grid container spacing={2} >
                    <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                        <Typography variant="body1" style={{ fontSize: "3rem", color: "#33383b", }} gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ backgroundColor: "black" }} variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none', display: "block" }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            <Typography>
                                <Button onClick={handleGoogleLogin} variant="contained" style={{ backgroundColor: "blue", marginBottom:'30px' }} >Google SignIn</Button>
                            </Typography>
                        </form>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success" style={{ margin: '50px' }} >Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>
            </Container>

        </>
    );
};

export default Login;




