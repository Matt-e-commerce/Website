import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import Otpimage from "../../images/OTPimage.png";
import Card from "@mui/material/Card";
import { useState } from "react";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";
import Securitystyle from './Security.style'
import Layout from "../../Layout/Layout";

const Securty = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const [otpValue, setOtpValue] = useState("");
  const handleOtpChange = (event) => {
    setOtpValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box>
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            sm={10}
            xs={12}
            sx={{
              margin: "auto",
              order: { md: 0, sm: 1, xs: 1}}}>
            <Card sx={Securitystyle["Securitycard-2"]}>
              <Typography
                variant="subtitle1"
               sx={Securitystyle.Otpheading}
              >
                Enter OTP
              </Typography>
              <Typography
                variant="subtitle1"
                sx={Securitystyle.Securityparagraph}
              >
                OTP has been sent to your email.
              </Typography>
              <br/>
              <Grid
                container
                spacing={1}>
                <Grid item md={2} sm={2} xs={6}>
                  <Card sx={Securitystyle.Cardbox}>
                    <TextField
                     id="otp-first" 
                     min="0" 
                     max="1" 
                     step="1" 
                     aria-label="first digit"
                      onChange={handleOtpChange}
                      inputProps={{
                        maxLength: 1,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                  sx={Securitystyle.Cardbox}>
                    <TextField
                      id="otp-second"
                        min="0" 
                        max="1" 
                        step="1" 
                        aria-label="second digit" 
                      onChange={handleOtpChange}
                      inputProps={{
                        maxLength: 1,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card  sx={Securitystyle.Cardbox} >
                    <TextField
                      id="otp-third" 
                      min="0" 
                      max="1" 
                      step="1" 
                      aria-label="third digit"
                      onChange={handleOtpChange}
                      inputProps={{
                        maxLength: 1,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                   sx={Securitystyle.Cardbox}>
                    <TextField
                      id="otp-fourth" 
                       min="0" 
                       max="1" 
                       step="1" 
                       aria-label="fourth digit"
                      onChange={handleOtpChange}
                      inputProps={{
                        maxLength: 1,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
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
                  <Link to="/profile">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={Securitystyle.Vaerifybutton}
                    >
                      Verify & Proceed
                    </Button>
                  </Link>
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
          <Grid item md={6} sm={12} xs={12} sx={{flexDirection: { md:"row",xs: "row-reverse", sm: "row-reverse" }, // Reverse the order on small and extra-small screens
}}>
            <img src={Otpimage} style={{ width: "100%",height:'95%' }} />
          </Grid>
        </Grid>
        <Callsupport />
      </Box>
      </Layout>

    </ThemeProvider>
  );
};

export default Securty;
