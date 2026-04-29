import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Navigation.css";

const pages = [
  "Home",
  "Services",
  "CarParts",
  "Car-Specialist",
  "About",
  "Contact",
];

const Navigation = () => {
  const { user, logout } = UseAuth();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নেভিগেশন বারের ব্যাকগ্রাউন্ড চেঞ্জ হবে
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleNavClicked = (page) => {
    const path =
      page === "Home" ? "/home" : `/${page.toLowerCase().replace("-", "")}`;
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      className={`nav-master ${scrolled ? "nav-scrolled" : "nav-transparent"}`}
      elevation={scrolled ? 4 : 0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            <img
              className="nav-logo"
              src="https://d1yei2z3i6k35z.cloudfront.net/1733607/620e3a5d78eeb_Risorsa8.png"
              alt="Besa Logo"
            />
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{ className: "mobile-menu-paper" }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavClicked(page)}>
                  <Typography textAlign="center" className="mobile-link">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO - Mobile */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              className="nav-logo-mobile"
              src="https://d1yei2z3i6k35z.cloudfront.net/1733607/620e3a5d78eeb_Risorsa8.png"
              alt="Besa Logo"
            />
          </Typography>

          {/* Navigation Links - Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavClicked(page)}
                className="nav-link-btn"
                sx={{ mx: 1, color: scrolled ? "#1e293b" : "white" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Right Side Icons & Auth */}
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            <IconButton
              className="cart-icon-btn"
              sx={{ color: scrolled ? "white" : "white" }}
            >
              <AddShoppingCartIcon />
            </IconButton>

            {user.email ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Tooltip title={user.displayName}>
                  <Avatar
                    src={user.photoURL}
                    sx={{ border: "2px solid #2563eb" }}
                  />
                </Tooltip>
                <Button
                  className="dashboard-btn"
                  onClick={() => navigate("/dashboard")}
                  sx={{ display: { xs: "none", md: "inline-flex" } }}
                >
                  Dashboard
                </Button>
                <Button className="logout-btn" onClick={logout}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Button
                className="login-btn"
                onClick={() => navigate("/login")}
                variant={scrolled ? "contained" : "outlined"}
                sx={{
                  color: scrolled ? "white" : "white",
                  borderColor: "white",
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
