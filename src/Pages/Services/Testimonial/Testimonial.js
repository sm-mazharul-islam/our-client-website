import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

import "./Testimonial.css";

import TestimonialCard from "./TestimonialCard";

const Services = () => {
  const { user } = UseAuth();

  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/userReview")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{ flexGrow: 1 }}
          style={{ marginTop: "20px", paddingBottom: "50px" }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {car.map((article) => (
              <Grid item xs={2} sm={4} md={4}>
                <TestimonialCard article={article}></TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Services;

/* aita apatoto kaje lage na pore dekhtesi  */
