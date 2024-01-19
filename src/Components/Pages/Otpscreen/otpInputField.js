import React from "react";
import { Typography, Box, TextField, Button, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import "react-toastify/dist/ReactToastify.css";
import Securitystyle from "./Security.style";
const OTPInputField  = ({ id, error, register }) => {
 
  return (
    <Grid item md={2} sm={2} xs={6}>
    <Card  sx={Securitystyle.Cardbox}>
      <TextField
        id={id}
        min="0"
        max="1"
        type="text"
        step="1"
        aria-label={`otp-${id}`}
        inputProps={{
          maxLength: 1,
        }}
        {...register(`otp-${id}`, { required: true })}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      {error && (
        <p role="alert" style={{ color: "#F7941D" }}>
          OTP is required
        </p>
      )}
    </Card>
  </Grid>
  );
};

export default OTPInputField ;
