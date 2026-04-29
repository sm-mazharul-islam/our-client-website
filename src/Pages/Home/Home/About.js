import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../../Shared/Footer";
import "./About.css";
import car1 from "../../../Images/car_01.jpg";
import car2 from "../../../Images/car_07.jpg";
import car3 from "../../../Images/car_08.jpg";
import car4 from "../../../Images/car_09.jpg";
import CountUp from "react-countup";

import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DiamondIcon from "@mui/icons-material/Diamond";
import { red, yellow } from "@mui/material/colors";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EngineeringIcon from "@mui/icons-material/Engineering";

const About = () => {
  return (
    <>
      <Box className="setImage" style={{ marginTop: "17px" }}>
        {/* <img src="https://newevolutiondesigns.com/images/freebies/car-facebook-cover-4.jpg" alt="" /> */}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3} sm={5}>
              <Typography
                variant="h2"
                sx={{ color: "white", marginTop: "150px" }}
              >
                <b>About Us...</b>
              </Typography>
            </Grid>
            <Grid item xs={9} sm={7}>
              <img
                style={{ marginTop: "33px", height: "350px" }}
                src=" https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/03/woman-image.png.webp "
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={2} style={{ marginBottom: "40px" }}>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <SafetyCheckIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4"> Secured Payment Guarantee </Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <HeadsetMicIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4"> Help Center & Support 24/7</Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <SecurityIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4"> Booking any Class Vehicles </Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <BusinessCenterIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4">
              Corporate and Business Services
            </Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <PersonAddIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4"> Car Sharing Options </Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBottom: "40px", marginTop: "20px" }}
          >
            <DiamondIcon style={{ fontSize: "60", color: "red" }} />
            <Typography variant="h4"> Limousine and Chauffeur Hire </Typography>
            <Typography variant="p">
              Vestibulum at ultrices elit. Maecenas faucibus vulputate
              vestibulum
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid container spacing={0} style={{ overflowX: "hidden" }}>
        <Grid item xs={12} md={6}>
          <img
            src={car2}
            alt=""
            style={{
              marginTop: "80px",
              marginBottom: "-10px",
              width: "100%",
              display: "block",
            }}
          />
          <img src={car3} alt="" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={car1}
            alt=""
            style={{ marginTop: "-20px", marginBottom: "-10px", width: "100%" }}
          />
          <img src={car4} alt="" style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={6} md={4} style={{ background: "#1F2B3E" }}>
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            <CountUp
              style={{ color: "white" }}
              start={150}
              end={10000}
              duration={12}
              prefix="users: "
              decimals={2}
            ></CountUp>
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} style={{ background: "#1F2B3E" }}>
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            <CountUp
              style={{ color: "white" }}
              end={50000}
              duration={10}
              prefix="reach: "
            ></CountUp>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ background: "#1F2B3E" }}>
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            <CountUp
              style={{ color: "white" }}
              end={10000}
              duration={11}
              prefix="Super Car :"
              suffix="+"
            ></CountUp>
          </Typography>
        </Grid>
      </Grid>

      <Footer></Footer>
    </>
  );
};

export default About;
