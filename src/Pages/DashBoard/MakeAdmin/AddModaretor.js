import { Button, Grid, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import Modaretors from "../../Home/Home/Modaretors/Modaretors";
import { BASE_URL } from "../../../utils/constants";

const AddModaretor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch(`${BASE_URL}/modaretor`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("modaretor addedd successfully");
          console.log("modaretor addedd successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              border: "1px solid gray",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 9%, rgba(0,212,255,1) 71%, rgba(9,9,121,1) 100%)",
              width: "100%",
              margin: "auto",
            }}
          >
            <h3>Add a Modaretor</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "50%" }}
                label="Name"
                required
                onChange={(e) => setName(e.target.value)}
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "50%" }}
                type="email"
                label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
              />
              <br />

              <Input
                accept="image/*"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                sx={{ width: "50%", marginTop: "10px" }}
              />
              <br />
              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Add Modaretor
              </Button>
            </form>
            {success && <p style={{ color: "green" }}>{success}</p>}
          </div>
        </Grid>
      </Grid>
      <Modaretors />
    </div>
  );
};

export default AddModaretor;
