import { Button, Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const SecondExtraPart = () => {
  return (
    <Box style={{ margin: "auto" }}>
      <Typography>
        <Container>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: "100%" }}
                src="https://images.unsplash.com/photo-1555652736-e92021d28a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>ODI</h2>
              <p style={{ textAlign: "justify" }}>
                The most impressive car sales from the first RM Sotheby’s
                auction in St. Moritz Posted 2021-09-22 On September 17, 2021,
                RM Sotheby’s conducted its first-ever boutique Swiss sale
                grossing an exceptional CHF16.5 million (approx. $18 million)
                with eight lots exceeding CHF1 million.USA's car market in 2021
                rises by 2% with 14.95 million sales, reporting a very strong
                first half, followed by a double-digit fall in the second part
                of the year. Toyota conquers the market throne, overtaking Ford.
              </p>
              <p>Give Your Rating....</p>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className="btn">
                <NavLink
                  to="/services"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <Button variant="contained" color="secondary">
                    More Service
                  </Button>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Box>

    // style={{ background: `url(https://media.istockphoto.com/photos/vector-hexagons-pattern-geometric-abstract-background-with-simple-picture-id1307794659?k=20&m=1307794659&s=170667a&w=0&h=ji7vqTbl3pi5nqWd9S6sSFmdbz8bA64LCJw0lCj3rTc=)`, marginBottom: '30px' }}
  );
};

export default SecondExtraPart;
