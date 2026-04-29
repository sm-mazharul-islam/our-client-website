import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Shared/Footer";
import BookingService from "./BookingService";

const SingleService = () => {
  const { _id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const hello = async () => {
      await fetch(`http://localhost:7000/products/${_id}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    };
    hello();
  }, []);

  return (
    <div>
      <div
        style={{
          background: `url(https://wallpaperaccess.com/full/740013.jpg)`,
          paddingTop: "90px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          {" "}
          <b>See All Details : {service.name}</b>{" "}
        </Typography>
        {/* <Stack spacing={1} >
                       <Rating sx={{color:'#512da8', m:'auto'}} name="half-rating"  defaultValue={service.rating} precision={0.5} readOnly />
                        </Stack> */}
      </div>

      <Container>
        <Typography paragraph>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} mt={6}>
              <img style={{ width: "100%" }} src={service.picture} alt="" />

              <Stack spacing={1}>
                <Rating
                  sx={{ color: "#512da8" }}
                  name="half-rating"
                  defaultValue={service.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <Typography sx={{ padding: "40px" }}>{service.about}</Typography>
              <Typography variant="h4">Some related Picture</Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} mt={3}>
                    <img
                      style={{ width: "80%" }}
                      src={service.picture1}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} mt={3}>
                    <img
                      style={{ width: "80%" }}
                      src={service.picture2}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} mt={3}>
                    <img
                      style={{ width: "80%" }}
                      src={service.picture3}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} mt={3}>
                    <img
                      style={{ width: "80%" }}
                      src={service.picture4}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} mt={6}>
              <BookingService service={service}></BookingService>
            </Grid>
          </Grid>
        </Typography>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default SingleService;
