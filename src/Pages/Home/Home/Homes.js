import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../Services/ServiceCard";
import { BASE_URL } from "../../../utils/constants";

const Homes = () => {
  const [cycle, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data.slice(3, 9));
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <Box sx={{ mb: 6, borderLeft: "8px solid #2563eb", pl: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a" }}>
          Popular <span style={{ color: "#2563eb" }}>Models</span>
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{ flexGrow: 1 }}
          style={{ marginTop: "20px", paddingBottom: "50px" }}
        >
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {cycle.map((article) => (
              <Grid item xs={12} sm={4} md={4}>
                <ServiceCard article={article}></ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Homes;
