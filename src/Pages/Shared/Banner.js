import { Button, Grid, Typography, Box, Container } from "@mui/material";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ minHeight: "85vh" }}
        >
          {/* Left Side: Content Area */}
          <Grid item xs={12} md={5}>
            <Box className="hero-content">
              <Typography variant="overline" className="hero-subtitle">
                // Premium Experience
              </Typography>
              <Typography variant="h2" className="hero-title">
                Drive Your Favorite{" "}
                <span className="blue-text">Luxury Car</span>
              </Typography>
              <Typography className="hero-description">
                The fastest and easiest rental process. Experience the thrill of
                driving your dream car within the next 24 hours.
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  ml: { xs: 0, lg: 15 },
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button variant="contained" className="hero-btn-primary">
                  Reserve Now
                </Button>
                <Button variant="outlined" className="hero-btn-secondary">
                  Talk to a Manager
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Car Image Area */}
          <Grid item xs={12} md={7}>
            <Box className="hero-image-wrapper">
              <img
                className="floating-car"
                src="https://html.merku.love/rotors/demo_assets/images/banner/img_01.png"
                alt="Luxury Car"
              />
              {/* Decorative Circle for Depth */}
              <div className="hero-circle-bg" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
