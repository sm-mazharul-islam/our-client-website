import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookingService from "./BookingService";

const SingleService = () => {
  const { _id } = useParams();
  const [service, setService] = useState({});

  // 💡 Base URL handle করার জন্য এটি ব্যবহার করুন
  const baseUrl =
    "https://your-server-site-name.vercel.app" || "http://localhost:7000";

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`${baseUrl}/products/${_id}`);
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, [_id, baseUrl]); // ✅ _id এবং baseUrl ডিপেন্ডেন্সি যোগ করা হয়েছে

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://wallpaperaccess.com/full/740013.jpg)`,
          pt: "90px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Details of: {service.name || "Loading..."}
        </Typography>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Details Section */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden", mb: 3 }}
            >
              <img
                style={{ width: "100%", display: "block", height: "auto" }}
                src={service.picture}
                alt={service.name}
              />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="h6">Rating: </Typography>
              <Rating
                sx={{ color: "#9333ea" }}
                name="service-rating"
                value={Number(service.rating) || 0}
                precision={0.5}
                readOnly
              />
            </Stack>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}
            >
              {service.about}
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 3, color: "#1a1a1a" }}
            >
              Related Gallery
            </Typography>

            <Grid container spacing={2}>
              {[
                service.picture1,
                service.picture2,
                service.picture3,
                service.picture4,
              ].map(
                (pic, index) =>
                  pic && (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          overflow: "hidden",
                          borderRadius: 2,
                          boxShadow: 1,
                        }}
                      >
                        <img
                          style={{ width: "100%", transition: "0.3s" }}
                          src={pic}
                          alt={`Gallery ${index}`}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.1)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                      </Box>
                    </Grid>
                  ),
              )}
            </Grid>
          </Grid>

          {/* Booking Form Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "sticky", top: "100px" }}>
              <BookingService service={service} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleService;
