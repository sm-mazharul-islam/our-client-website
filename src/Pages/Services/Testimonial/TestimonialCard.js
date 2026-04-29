import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container, Rating, Box, Typography } from "@mui/material";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  const [car, setCar] = useState([]);

  // Base URL Handle
  const baseUrl =
    "https://your-server-site-name.vercel.app" || "http://localhost:7000";

  useEffect(() => {
    fetch(`${baseUrl}/userReview`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((err) => console.log(err));
  }, [baseUrl]);

  return (
    <Box sx={{ py: 8, background: "#f9f9f9" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 5,
            color: "#1a1a1a",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Our Customer <span style={{ color: "#9333ea" }}>Reviews</span>
        </Typography>

        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {car.map((review) => (
            <SwiperSlide key={review._id} className="swiper-slide-custom">
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  background: "white",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <img
                    className="reviewImg"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      border: "3px solid #9333ea",
                      padding: "3px",
                    }}
                    src={review.photo || "https://i.ibb.co/mJR9pS9/user.png"}
                    alt={review.name}
                  />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
                  {review.name}
                </Typography>

                <Rating
                  name="read-only"
                  value={Number(review.rating) || 0}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 2, color: "#9333ea" }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  "
                  {review.review
                    ? review.review.slice(0, 120)
                    : "No review provided"}
                  ..."
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
