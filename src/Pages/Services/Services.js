import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { BASE_URL } from "../../utils/constants";

const Services = () => {
  const [cycle, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        pt: { xs: 15, md: 20 },
        pb: 10,
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Container>
        {/* --- Gorgeous Section Heading --- */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#2563eb",
              fontWeight: 800,
              letterSpacing: 5,
              display: "block",
              mb: 1,
            }}
          >
            OUR PREMIUM FLEET
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#0f172a",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Explore Our <span style={{ color: "#2563eb" }}>Luxury</span>{" "}
            Collection
          </Typography>

          <Box
            sx={{
              width: "80px",
              height: "5px",
              backgroundColor: "#2563eb",
              mx: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* --- Loading State & Grid --- */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress sx={{ color: "#2563eb" }} />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              {cycle.map((article) => (
                <Grid item xs={12} sm={6} md={4} key={article._id}>
                  <ServiceCard article={article} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Services;
