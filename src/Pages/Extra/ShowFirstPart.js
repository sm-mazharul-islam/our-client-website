import React from "react";
import { Card, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const Booking = ({ example }) => {
  const { name, about } = example;

  return (
    <>
      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <Paper
            elevation={3}
            sx={{ py: 5, background: "rgba(10,10,10,.6)", color: "white" }}
          >
            <Typography
              sx={{ color: "info.main", fontWeight: 600 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              {about}
            </Typography>
          </Paper>
        </Card>
      </Grid>
    </>
  );
};

export default Booking;
