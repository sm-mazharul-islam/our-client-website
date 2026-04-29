import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
  CircularProgress,
  Divider,
  IconButton,
  Card,
  Chip,
  Paper,
  Dialog,
} from "@mui/material";
import { useParams, useNavigate } from "react-router";
import BookingService from "./BookingService";
import Footer from "../Shared/Footer";
import { BASE_URL } from "../../utils/constants";

// Icons
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import ChairIcon from "@mui/icons-material/Chair";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIosNew';
const SingleService = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Lightbox States
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/products/${_id}`);
        if (!response.ok) throw new Error("Data not found");
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      } finally {
        setLoading(false);
      }
    };
    if (_id) fetchServiceDetails();
  }, [_id]);

  const galleryImages = service
    ? [
        service.picture,
        service.picture1,
        service.picture2,
        service.picture3,
        service.picture4,
      ].filter(Boolean)
    : [];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#ffffff",
        }}
      >
        <CircularProgress sx={{ color: "#2563eb" }} size={60} thickness={5} />
      </Box>
    );
  }

  if (!service) {
    return (
      <Typography variant="h5" textAlign="center" sx={{ mt: 20 }}>
        Service not found!
      </Typography>
    );
  }

  return (
    <>
      <Box sx={{ pb: 10, background: "#f8fafc", minHeight: "100vh" }}>
        {/* --- Custom MUI Lightbox (Replacement for react-image-lightbox) --- */}
        <Dialog
          fullScreen
          open={isOpen}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Close */}
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            {/* Prev */}
            <IconButton
              onClick={() =>
                setPhotoIndex(
                  (photoIndex + galleryImages.length - 1) %
                    galleryImages.length,
                )
              }
              sx={{
                position: "absolute",
                left: { xs: 10, md: 40 },
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                p: 2,
              }}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>

            {/* Image */}
            <Box
              component="img"
              src={galleryImages[photoIndex]}
              alt="Luxury Car Gallery"
              sx={{
                maxHeight: "85vh",
                maxWidth: "90vw",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />

            {/* Next */}
            <IconButton
              onClick={() =>
                setPhotoIndex((photoIndex + 1) % galleryImages.length)
              }
              sx={{
                position: "absolute",
                right: { xs: 10, md: 40 },
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                p: 2,
              }}
            >
              <ArrowForwardIosNewIcon fontSize="large" />
            </IconButton>

            {/* Counter */}
            <Typography
              sx={{
                position: "absolute",
                bottom: 40,
                color: "white",
                fontWeight: 700,
                letterSpacing: 2,
                bgcolor: "rgba(37, 99, 235, 0.8)",
                px: 4,
                py: 1,
                borderRadius: "50px",
              }}
            >
              {photoIndex + 1} / {galleryImages.length}
            </Typography>
          </Box>
        </Dialog>

        {/* --- Hero Section --- */}
        <Box
          sx={{
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${service.picture || "https://wallpaperaccess.com/full/740013.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "350px", md: "550px" },
            display: "flex",
            alignItems: "center",
            position: "relative",
            clipPath: "ellipse(100% 100% at 50% 0%)",
          }}
        >
          <Container maxWidth="xl">
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                position: "absolute",
                top: "110px",
                left: "30px",
                color: "white",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Box sx={{ maxWidth: "800px" }}>
              <Chip
                label="AVAILABLE NOW"
                sx={{
                  bgcolor: "#2563eb",
                  color: "white",
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  textShadow: "0 10px 20px rgba(0,0,0,0.4)",
                }}
              >
                {service.name}
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                sx={{ mt: 2, alignItems: "center" }}
              >
                <Rating
                  value={Number(service.rating)}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#fbbf24" }}
                />
                <Typography
                  sx={{ color: "white", fontWeight: 500, letterSpacing: 1 }}
                >
                  EXCEPTIONAL EXPERIENCE
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* --- Content Body --- */}
        <Container
          maxWidth="xl"
          sx={{ mt: -8, position: "relative", zIndex: 5 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Card
                sx={{
                  p: { xs: 2, md: 5 },
                  borderRadius: 8,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                {/* Main Image View */}
                <Box
                  onClick={() => openLightbox(0)}
                  sx={{
                    borderRadius: 6,
                    overflow: "hidden",
                    mb: 4,
                    cursor: "pointer",
                    position: "relative",
                    boxShadow: "0 15px 35px rgba(37, 99, 235, 0.15)",
                    transition: "0.4s",
                    "&:hover": { transform: "scale(1.01)" },
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      display: "block",
                      maxHeight: "500px",
                      objectFit: "contain",
                      background: "#f8fafc",
                    }}
                    src={service.picture}
                    alt={service.name}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      background: "rgba(37, 99, 235, 0.9)",
                      color: "white",
                      px: 3,
                      py: 1,
                      borderRadius: 50,
                      fontWeight: 700,
                    }}
                  >
                    CLICK TO VIEW FULLSCREEN
                  </Box>
                </Box>

                {/* Specs */}
                <Grid container spacing={2} sx={{ mb: 5 }}>
                  {[
                    {
                      icon: <SpeedIcon />,
                      label: "POWER",
                      value: "650 HP",
                      color: "#fee2e2",
                    },
                    {
                      icon: <ElectricCarIcon />,
                      label: "0-100",
                      value: "3.2 Sec",
                      color: "#e0e7ff",
                    },
                    {
                      icon: <LocalGasStationIcon />,
                      label: "FUEL",
                      value: "95 Octane",
                      color: "#fef3c7",
                    },
                    {
                      icon: <SettingsIcon />,
                      label: "MODE",
                      value: "Sport+",
                      color: "#dcfce7",
                    },
                  ].map((spec, i) => (
                    <Grid item xs={6} sm={3} key={i}>
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          borderRadius: 4,
                          bgcolor: spec.color,
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        <Box sx={{ color: "#0f172a", mb: 1 }}>{spec.icon}</Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#475569",
                            fontWeight: 700,
                            fontSize: "0.7rem",
                          }}
                        >
                          {spec.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 800, color: "#0f172a" }}
                        >
                          {spec.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, mb: 2, color: "#0f172a" }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#475569",
                    lineHeight: 2,
                    mb: 5,
                    fontSize: "1.1rem",
                    textAlign: "justify",
                  }}
                >
                  {service.about}
                </Typography>

                {/* Benefits */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 5,
                    borderRadius: 6,
                    border: "1px dashed #cbd5e1",
                    bgcolor: "#f1f5f9",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
                    Exclusive Benefits
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1} alignItems="center" textAlign="center">
                        <VerifiedUserIcon color="primary" />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700 }}
                        >
                          Fully Insured
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1} alignItems="center" textAlign="center">
                        <SupportAgentIcon color="primary" />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700 }}
                        >
                          24/7 Roadside
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1} alignItems="center" textAlign="center">
                        <ChairIcon color="primary" />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700 }}
                        >
                          Luxury Comfort
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    color: "#0f172a",
                    borderLeft: "6px solid #2563eb",
                    pl: 2,
                    letterSpacing: "1px",
                  }}
                >
                  INTERACTIVE GALLERY
                </Typography>

                <Grid container spacing={2}>
                  {galleryImages.map(
                    (pic, index) =>
                      pic && (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                          <Box
                            onClick={() => openLightbox(index)}
                            sx={{
                              overflow: "hidden",
                              borderRadius: 4,
                              height: "140px",
                              cursor: "pointer",
                              border: "3px solid white",
                              boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                              transition: "0.4s",
                              "&:hover": {
                                borderColor: "#2563eb",
                                transform: "translateY(-8px)",
                              },
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              src={pic}
                              alt={`Gallery ${index}`}
                            />
                          </Box>
                        </Grid>
                      ),
                  )}
                </Grid>
              </Card>
            </Grid>

            {/* Right Side Pricing & Booking */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: { md: "sticky" }, top: "120px" }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 8,
                    boxShadow: "0 30px 70px rgba(37, 99, 235, 0.12)",
                    border: "2px solid #2563eb",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: "#0f172a", mb: 1 }}
                  >
                    Total Price
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 900, color: "#2563eb", mb: 3 }}
                  >
                    ${service.price}{" "}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "#64748b",
                        fontWeight: 500,
                      }}
                    >
                      / per day
                    </span>
                  </Typography>
                  <Divider sx={{ mb: 4, borderStyle: "dashed" }} />
                  <BookingService service={service} />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SingleService;
