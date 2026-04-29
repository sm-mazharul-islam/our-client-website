import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "../../../Shared/Footer";

const CarSpecialist = () => {
  return (
    <div>
      <h3>This is car CarSpecialist</h3>
      <Box>
        <Grid
          container
          spacing={0}
          style={{ background: "#192026", marginTop: "20%" }}
        >
          <Grid item xs={12} md={12}>
            <img
              style={{ marginTop: "-20%", width: "80%" }}
              src="https://i.ibb.co/HPmpdvg/about-limmo-large.png"
              alt=""
            />
          </Grid>
          {/* <Grid item xs={12} md={4}>

        <img style={{position:'absolute',zIndex:'1', width:'30%', left:'0px'}} src="https://i.ibb.co/QQYvPbG/about-chairs.png" alt="" />
    </Grid> */}
          <Grid item xs={12} md={12}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={4}>
                <TimeToLeaveIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <PhoneInTalkIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <ShutterSpeedIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <EventSeatIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <MonetizationOnIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <EngineeringIcon style={{ fontSize: "60" }} />
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, commodi vero voluptates aliquid provident ut at
                  dolor quam? In, perferendis?{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default CarSpecialist;
