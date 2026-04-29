import { Grid, Typography, Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ThirdExtraPart.css";

const ThirdExtraPart = () => {
  const sectionRef = useRef(null);

  // স্ক্রল প্রগ্রেস ট্র্যাক করা (এই সেকশনের শুরু থেকে শেষ পর্যন্ত)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // স্ক্রল অনুযায়ী গাড়ির পজিশন পরিবর্তন ( -200px থেকে শুরু হয়ে 400px পর্যন্ত সামনে যাবে)
  const carX = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  return (
    <Box
      ref={sectionRef}
      className="extra-section-wrapper"
      sx={{ py: 15, overflow: "hidden" }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" className="premium-title">
            FEEL THE <span className="blue-highlight">POWER</span> AS YOU SCROLL
          </Typography>
          <div className="title-divider" />
        </Box>

        {/* --- Animated Center Car Section --- */}
        <Box sx={{ position: "relative", height: "300px", mb: 10 }}>
          <motion.div
            style={{ x: carX }} // স্ক্রল করলে x অক্ষ বরাবর নড়বে
            className="scrolling-car-container"
          >
            <img
              className="main-car-img"
              src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2013/06/18.png.webp"
              alt="Moving Car"
            />
            {/* ধোঁয়া বা স্পিড লাইন ইফেক্ট */}
            <div className="speed-smoke" />
          </motion.div>

          {/* নিচের রাস্তা (Road Line) */}
          <div className="road-line" />
        </Box>

        {/* বাকি গ্রিড আইটেমগুলো নিচে থাকবে */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="info-card-modern">
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#2563eb" }}
              >
                Advanced Aerodynamics
              </Typography>
              <Typography className="desc-text">
                Our vehicles are designed to cut through the air, providing
                maximum stability even at top speeds.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="info-card-modern">
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#2563eb" }}
              >
                Instant Reservation
              </Typography>
              <Typography className="desc-text">
                Book your favorite beast in under 60 seconds and hit the road
                today.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdExtraPart;
