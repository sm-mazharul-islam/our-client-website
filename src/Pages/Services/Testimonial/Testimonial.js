import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Container, Rating, Box, Typography, Avatar } from "@mui/material";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";
import { BASE_URL } from "../../../utils/constants";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  // Base URL - Replace with your deployed server link later

  useEffect(() => {
    fetch(`${BASE_URL}/userReview`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <Box className="cockpit-section-wrapper">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="header-flex-box">
          <Box>
            {/* <div className="accent-badge">BESA RENTAL // 2026</div> */}
            <Typography variant="h2" className="luxury-title">
              ELITE <span className="blue-gradient-text">EXPERIENCES</span>
            </Typography>
          </Box>
          <div className="header-car-vibe">
            <div className="speed-line" />
          </div>
        </Box>

        <Swiper
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="cockpit-swiper"
        >
          {reviews.map((item) => {
            // Dynamic calculation for the meter
            const satisfactionLevel = item.rating
              ? (item.rating / 5) * 100
              : 90;

            return (
              <SwiperSlide key={item._id}>
                <Box className="cockpit-card">
                  <div className="card-mesh-bg" />

                  <Box sx={{ position: "relative", zIndex: 5 }}>
                    <Box className="card-user-info">
                      <Avatar
                        src={item.photo || "https://i.ibb.co/mJR9pS9/user.png"}
                        className="driver-avatar-ring"
                        sx={{ width: 80, height: 80 }}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6" className="driver-name">
                          {item.name}
                        </Typography>
                        <Rating
                          value={Number(item.rating) || 5}
                          readOnly
                          size="small"
                          sx={{ color: "#2563eb" }}
                        />
                      </Box>
                    </Box>

                    <Typography className="testimonial-body">
                      "
                      {item.review
                        ? item.review.slice(0, 160)
                        : "The driving experience was absolute perfection. Highly recommended for luxury car lovers."}
                      "
                    </Typography>

                    {/* Metrics Section */}
                    <Box className="card-metrics-row">
                      <Box className="metric-box">
                        <div className="metric-header">
                          <span className="metric-label">SATISFACTION</span>
                          <span className="metric-value">
                            {Math.round(satisfactionLevel)}%
                          </span>
                        </div>
                        <div className="progress-track">
                          <div
                            className="progress-fill"
                            style={{ width: `${satisfactionLevel}%` }}
                          ></div>
                        </div>
                      </Box>
                      <Box className="metric-box">
                        <div className="metric-header">
                          <span className="metric-label">CAR QUALITY</span>
                          <span className="metric-value">98%</span>
                        </div>
                        <div className="progress-track">
                          <div
                            className="progress-fill"
                            style={{ width: "98%" }}
                          ></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>

                  {/* Aerodynamic Fin Accent */}
                  <div className="aerodynamic-accent" />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonial;
