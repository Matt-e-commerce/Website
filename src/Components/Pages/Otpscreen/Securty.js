import React from "react";
import { Typography, Box, TextField, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import Otpimage from "../../images/OTPimage.png";
import Card from "@mui/material/Card";
import { useState } from "react";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";
import Securitystyle from "./Security.style";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { verifyAsync } from "../../../redux/Slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import OTPInputField from "./otpInputField";
import "react-toastify/dist/ReactToastify.css";
const Securty = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset, // Destructure the reset function from react-hook-for
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const otpValues = Object.keys(data)
      .filter((key) => key.startsWith("otp-otp-"))
      .map((key) => data[key])
      .join("");

    // Check if the first digit is '1' and eliminate it unless it's from otp-otp-1
    const formattedOTP =
      otpValues.startsWith("1") && data["otp-otp-1"] !== "1"
        ? otpValues.slice(1)
        : otpValues;
    const otp = {
      otp: formattedOTP,
    };
    try {
      const response = await dispatch(verifyAsync(otp));

      if (response?.type === "auth/verify/fulfilled") {
        // Display success toast
        toast.success("Verified successfully!");
        // Reset the form values
        reset();
        // Redirect to securitypage
        navigate("/login");
      } else {
        // Display error toast with backend error message
        toast.error(` failed. Please try again. ${response?.error?.message}`);
      }
    } catch (error) {
      // Handle other errors
      toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                md={5}
                sm={10}
                xs={12}
                sx={{
                  margin: "auto",
                  order: { md: 0, sm: 1, xs: 1 },
                }}
              >
                <Card sx={Securitystyle["Securitycard-2"]}>
                  <Typography variant="subtitle1" sx={Securitystyle.Otpheading}>
                    Enter OTP
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={Securitystyle.Securityparagraph}
                  >
                    Use OTP has been sent to your email.
                  </Typography>
                  <br />
                  <Grid container spacing={1}>
                    {[1, 2, 3, 4].map((digit) => (
                      <OTPInputField
                        key={digit}
                        id={`otp-${digit}`}
                        error={errors[`otp-${digit}`]?.type === "required"}
                        register={register}
                      />
                    ))}
                  </Grid>
                  <Grid
                    container
                    sx={{ marginTop: { md: "30px", sm: "20px", xs: "10px" } }}
                  >
                    <Grid item>
                      <Stack
                        direction={{ md: "row", xs: "column", sm: "column" }}
                        spacing={{ xs: 1, sm: 2, md: 1 }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={Securitystyle.Recovecodeheading}
                        >
                          If you don’t receive code.{" "}
                        </Typography>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <span style={{ color: "#F7941D" }}> Resend it? </span>{" "}
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>

                  <br />

                  <Grid container spacing={spacing}>
                    <Grid item md={12} sm={12} xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={Securitystyle.Vaerifybutton}
                      >
                        Verify & Proceed
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    sx={{ marginTop: { md: "40px", sm: "38px", xs: "5px" } }}
                  >
                    <Grid item sx={{ textAlign: "center" }}>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <span style={{ color: "#F7941D" }}>
                          {" "}
                          Go back to login screen?{" "}
                        </span>{" "}
                      </Link>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  flexDirection: {
                    md: "row",
                    xs: "row-reverse",
                    sm: "row-reverse",
                  }, // Reverse the order on small and extra-small screens
                }}
              >
                <img src={Otpimage} style={{ width: "100%", height: "95%" }} />
              </Grid>
            </Grid>
            <Callsupport />
          </Box>
        </form>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Securty;
