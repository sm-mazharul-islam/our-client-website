
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import './Navigation.css'

const pages = ['Home', 'Services','CarParts','Car-Specialist', 'About','contact'];



const Navigation = () => {
    // const { user, logout } = useAuth()
   
    const { user, logout } = UseAuth()
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    const handleNavClicked = (page) => {
        switch (page) {

            case "Home": navigate('/home')
                break;
            case "Services": navigate('/services')
                break;
            case "Car-Specialist": navigate('/carSpecialist')
                break;
            case "CarParts": navigate('/carParts')
                break;
            case "About": navigate('/about')
                break;
            case "Contact": navigate('/contact')
                break;
            // case "DashBoard": navigate('/dashboard')
            //     break;
            default: navigate('/home')
        }


    }
    const handleLogOut = () => {
        logout()
    }
    return (
        <Box sx={{ flexGrow: 1 }} className="section">
            <AppBar position="static" style={{ backgroundColor: "" }} >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, fontSize: "1.5rem", display: { xs: 'none', md: 'flex' } }}

                        >
                            <img width={100} src="https://d1yei2z3i6k35z.cloudfront.net/1733607/620e3a5d78eeb_Risorsa8.png" alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" onClick={() => handleNavClicked(page)}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >

                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography onClick={() => handleNavClicked(page)}>
                                        {page}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            {
                                user.email ? <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '100px' }}  >{user.displayName}</Box>
                                    <img src={user.photoURL} style={{ borderRadius: "80%", width: "12%" }} alt="" />

                                    <NavLink style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}
                                        to="/dashboard" ><Button color="inherit"  >Dashboard</Button></NavLink>
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                        onClick={handleLogOut}
                                    >Logout </Button>
                                </div> : <NavLink style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/login" ><Button color="inherit"  >Login</Button></NavLink>
                            }
                        </Box>
                        
           <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;