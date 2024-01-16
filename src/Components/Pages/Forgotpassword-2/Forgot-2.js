import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Checkbox
} from "@mui/material";
import { Link } from "react-router-dom";
import Loginstyle from "../Loginscreen/Login.style";
import theme from "../../Theme/Theme";
import Forgotimage from "../../../Components/images/forgotscreen.png";
import Card from "@mui/material/Card";
import Callsupport from "../../Callsupport/Callsupport";
import LockIcon from "@mui/icons-material/Lock";
import { ThemeProvider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardMedia from '@mui/material/CardMedia';
import Forgottwostyle from './Forgot-2.style'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import Layout from "../../Layout/Layout";

const Forgotpassword = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const [inputvalue, setinputvalue] = useState({
    password: "",
    Againpassword: "",
    showPassword: false,
  });
  const handleSubmit = async (event) => {
    try {
      const user = {
        password: inputvalue.password,
        AgainPassword: inputvalue.Againpassword,
      };
      const response = await axios.post(
        "https://e-commerce-qubi.vercel.app/api/auth/user/userResendOtp",
        user
      );
      console.log(response.data);
    } catch (error) {
      // Handle other errors
      console.log("Error:", error.response.data);
    }
  };
  const Handleinput = (e) => {
    const { name, value } = e.target;
    setinputvalue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleTogglePassword = () => {
    setinputvalue((prevInput) => ({
      ...prevInput,
      showPassword: !prevInput.showPassword,
    }));
  };
  console.log(inputvalue);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Box>
        <Grid container spacing={4} sx={Loginstyle.Maincontainer}>
          <Grid item md={6} sm={12} xs={12} sx={{ order: { md: 0, sm: 1, xs: 1 } }}>
            <Card sx={Forgottwostyle["Forgotcard-2"]}>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={spacing}>
                  <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "600",
                        lineHeight: { md: "40.12px", sm: "50px", xs: "40px" },
                        fontSize: { md: "50px", sm: "30px", xs: "20px" },
                      }} >
                      Forget Password
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        lineHeight: { md: "71.12px", sm: "30px", xs: "30px" },
                      }}>
                      Please add new password for more shopping.
                    </Typography>
                    <TextField
        required
        fullWidth
        name="password"
        value={inputvalue.password}
        type={inputvalue.showPassword ? 'text' : 'password'}
        size="large"
        label="Password"
        placeholder="Password"
        onChange={Handleinput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: '#757575', fontSize: '18px' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {inputvalue.showPassword ? (
                  <VisibilityOffIcon sx={{ color: '#757575' }} />
                ) : (
                  <VisibilityIcon sx={{ color: '#757575' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <TextField
        required
        fullWidth
        name="AgainPassword"
        value={inputvalue.AgainPassword}
        type={inputvalue.showPassword ? 'text' : 'password'}
        size="large"
        label="Again Password"
        placeholder="Again Password"
        onChange={Handleinput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: '#757575', fontSize: '18px' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {inputvalue.showPassword ? (
                  <VisibilityOffIcon sx={{ color: '#757575' }} />
                ) : (
                  <VisibilityIcon sx={{ color: '#757575' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
                  </Grid>
                </Grid>
                <br />
                <Grid item xs={12} sx={{ paddingX: { md: "65px", sm: '65px', xs: "20px" } }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        sx={{
                          "&.Mui-checked": {
                            color: "#F7941D", // Change to your desired color
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: { md: "19.6px", sm: "12px", xs: "15px" },
                          fontWeight: "400",
                        }}>
                        Remember me
                      </Typography>
                    }
                  />
                </Grid>
                <br />
                <Grid container spacing={spacing} justifyContent="center">
                  <Grid item md={10} sm={12} xs={12}>
                    <Link to="/securitypage" style={{ textDecoration: "none" }}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => {handleSubmit()}}
                        sx={Forgottwostyle.Recoverpasswordbutton}>
                        Recover Password
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
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: { md: "flex", sm: "block", xs: "block" },
              justifyContent: "flex-end",
              flexDirection: { md: "row", xs: "row-reverse", sm: "row-reverse" }, // Reverse the order on small and extra-small screens

            }}
          >
            <Card sx={{ backgroundColor: 'transparent', boxShadow: '0px 0px 0px 0px' }} >
              <CardMedia
                component="img"
                image={Forgotimage}
                alt="Paella dish"
                sx={{ width: '100%', height: "100%" }}
              />

            </Card>
          </Grid>
        </Grid>

        <Callsupport />
      </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Forgotpassword;
