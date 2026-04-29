import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
import "./ServiceCard.css";

const ServiceCard = ({ article }) => {
  const { _id, name, picture, rating, about } = article;

  const shortId = _id ? _id.toString().slice(-4) : "0000";

  return (
    <>
      <Box className="card-outer-wrapper">
        <Card className="premium-car-card">
          {/* Fixed Height Image Section */}
          <Box className="card-visual-area">
            <CardMedia
              component="img"
              image={picture}
              alt={name}
              className="car-display-img"
            />
            {/* ID Tag instead of Price */}
            <div className="chassis-tag">
              <SettingsIcon sx={{ fontSize: "12px", mr: 0.5 }} />
              REF-{shortId}
            </div>
            <div className="image-overlay-gradient" />
          </Box>

          <CardContent className="card-body-fixed">
            {/* Fixed Height Content Area */}
            <Box sx={{ height: "120px", overflow: "hidden" }}>
              <Typography variant="h6" className="luxury-car-title">
                {name}
              </Typography>

              <Typography variant="body2" className="luxury-car-desc">
                {about
                  ? about.split(" ").slice(0, 10).join(" ") + "..."
                  : "Elite performance meets unmatched luxury for your journey."}
              </Typography>

              <Box className="rating-flex">
                <Rating
                  value={Number(rating)}
                  precision={0.5}
                  readOnly
                  size="small"
                  sx={{ color: "#2563eb" }}
                />
                <span className="rating-count">({rating})</span>
              </Box>
            </Box>

            {/* Action Button always stays at the bottom */}
            <Link to={`/details/${_id}`} style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                className="luxury-action-btn"
                endIcon={
                  <ArrowForwardIosIcon sx={{ fontSize: "12px !important" }} />
                }
              >
                Explore Machine
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ServiceCard;
