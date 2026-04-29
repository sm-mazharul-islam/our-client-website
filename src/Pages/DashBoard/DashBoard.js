import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {
    Outlet,
    Link
   
} from "react-router-dom";
import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import UseAuth from '../../Hooks/UseAuth';

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = UseAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div  >
           
           <Toolbar  />
            <Divider style={{paddingBottom:'12px'}}/>


            
            <Box style={{  padding:'12px'}} >
            <Link to="/services" style={{textDecoration:'none', color:'black'}}><Button color="inherit">Services</Button></Link>
            <Divider />
            <br />
            <Link to="/dashboard" style={{textDecoration:'none', color:'black'}}> <DashboardIcon/> <Button
                color="inherit">DashBoard</Button></Link>
              
                <Divider/>
                <br />
                {admin && <Box> <Link to={`/dashboard/manageOrder`} style={{textDecoration:'none', color:'black'}}> <AddShoppingCartOutlinedIcon/><Button
                color="inherit">Manage Order</Button></Link>
                 <Divider />
                <br />
            <Link to={`/dashboard/addService`} style={{textDecoration:'none' , color:'black'}}><DirectionsCarFilledOutlinedIcon/><Button
                color="inherit">Add Service</Button></Link>
                 <Divider />
            <br />
                <Link to={`/dashboard/makeAdmin`} style={{textDecoration:'none' , color:'black'}}><AdminPanelSettingsIcon/><Button color="inherit">Make Admin</Button></Link>
                <Divider />
            <br />
                <Link to={`/dashboard/addmodaretor`} style={{textDecoration:'none' , color:'black'}}><AdminPanelSettingsIcon/><Button color="inherit">Add Modaretor</Button></Link>
                <Divider />
            <br />
                <Link to={`/dashboard/users`} style={{textDecoration:'none' , color:'black'}}><Button color="inherit">All Users</Button></Link>
                <Divider />
               
                  </Box>}
                  
           </Box>
           {/* ---------------- */}
       
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            {/* ------------------- */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        // -----------------------------
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{

                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
            // ----------------------

                component="nav" 
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />






                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    
};

export default DashBoard;