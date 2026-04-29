import { Grid, Typography, Box, Container } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "./ThirdExtraPart.css";

const ThirdExtraPart = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = rect.top - windowHeight;
        const total = rect.height + windowHeight;
        const progress = Math.min(Math.max(-start / total, 0), 1);

        setScrollPercentage(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playEngineSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current
        .play()
        .catch(() => console.log("Sound ready after click"));
    }
  };

  return (
    <Box
      ref={sectionRef}
      className="highway-section-wrapper"
      sx={{ py: { xs: 8, md: 15 } }}
    >
      <audio ref={audioRef} src="/sounds/car-sound.mp3" preload="auto" />

      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 10 } }}>
          <Typography
            variant="h2"
            className="highway-title"
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            FAST TRACK TO <span className="blue-stroke">LUXURY</span>
          </Typography>
          <div className="highway-accent" />
        </Box>

        {/* --- The Realistic Highway --- */}
        <Box className="real-highway-track">
          <Box
            className="moving-car-vessel"
            onMouseEnter={playEngineSound}
            style={{
              left: `${scrollPercentage * 100}%`,
              transform: `translateX(-${scrollPercentage * 100}%)`,
            }}
          >
            <img
              className="car-top-view-img"
              src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2013/06/18.png.webp"
              alt="Red Sports Car"
            />
            <div className="speed-vibration" />
          </Box>

          {/* Highway Markings */}
          <div className="highway-yellow-line" />
        </Box>

        <Grid container spacing={4} sx={{ mt: { xs: 6, md: 12 } }}>
          <Grid item xs={12} md={6}>
            <Box className="luxury-info-card">
              <Typography variant="h5" className="card-heading"></Typography>
              <Typography className="card-paragraph">
                engineered for stability and speed. Every curve on our fleet is
                designed to minimize drag and maximize performance on the open
                road.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="luxury-info-card">
              <Typography variant="h5" className="card-heading"></Typography>
              <Typography className="card-paragraph">
                Drive with peace of mind. Our premium support team is always on
                standby to ensure your journey is as smooth as the drive.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdExtraPart;
