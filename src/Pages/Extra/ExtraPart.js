import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import CountUp from "react-countup";
import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business";
import "./ExtraPart.css";

const firstExtra = [
  {
    id: 1,
    name: "OIL CHANGES",
    icon: <BuildIcon />,
    about:
      "Keep your engine running smooth with our premium synthetic oil change service.",
  },
  {
    id: 2,
    name: "AFFORDABLE",
    icon: <DirectionsCarIcon />,
    about:
      "Luxury experience doesn't always mean a luxury price tag. Best rates in town.",
  },
  {
    id: 3,
    name: "AIR CONDITIONING",
    icon: <AcUnitIcon />,
    about:
      "Stay cool during your drive with our advanced climate control maintenance.",
  },
  {
    id: 4,
    name: "TRANSMISSION",
    icon: <SettingsSuggestIcon />,
    about:
      "Expert transmission fluid checks and repairs for a seamless gear shifting.",
  },
  {
    id: 5,
    name: "FREE SUPPORT",
    icon: <SupportAgentIcon />,
    about:
      "Our dedicated support team is available 24/7 for all your rental inquiries.",
  },
  {
    id: 6,
    name: "DEALERSHIP",
    icon: <BusinessIcon />,
    about:
      "Exclusive collection of the world's most desired supercar brands under one roof.",
  },
];

const ExtraPart = () => {
  return (
    <Box className="extra-light-wrapper">
      <Container maxWidth="lg">
        {/* Stats Section with Soft Elevations */}
        <Box className="stats-light-bar">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4} className="stat-box-border">
              <Typography variant="h3" className="stat-num-light">
                <CountUp end={10000} duration={4} separator="," suffix="+" />
              </Typography>
              <Typography variant="overline" className="stat-sub-light">
                Happy Drivers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className="stat-box-border">
              <Typography variant="h3" className="stat-num-light">
                <CountUp end={50000} duration={4} separator="," prefix="+" />
              </Typography>
              <Typography variant="overline" className="stat-sub-light">
                Total Reach
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" className="stat-num-light">
                <CountUp end={1200} duration={4} suffix="+" />
              </Typography>
              <Typography variant="overline" className="stat-sub-light">
                Super Cars
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Service Cards Grid */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {firstExtra.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box className="service-card-light">
                <Box className="icon-circle">{item.icon}</Box>
                <Typography variant="h6" className="card-title-light">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="card-desc-light">
                  {item.about}
                </Typography>
                <div className="hover-line" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExtraPart;
