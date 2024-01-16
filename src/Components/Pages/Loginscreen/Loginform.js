import React from "react";
import {
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
  Grid,
  Card,
} from "@mui/material";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Loginstyle from "./Login.style";
import theme from "../../Theme/Theme";
import { CssBaseline } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";
import Signup from "../Signup/Signup";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Layout from "../../Layout/Layout";

const Login = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleSubmit = async (event) => {
    try {
      const user = {
        email: inputvalue.email,
        password: inputvalue.password,
      };
      const response = await axios.post(
        "https://e-commerce-qubi.vercel.app/api/auth/user/login",
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
      <Grid container spacing={4} sx={Loginstyle.Maincontainer}>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{ marginX: { md: "0", sm: "40px", xs: "10px" } }}
        >
          <Card sx={Loginstyle.Logincardstyle}>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={spacing}>
                <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                  <Typography variant="subtitle1" sx={Loginstyle.loginheading}>
                    Login
                  </Typography>
                  <br />
                  <br />
                  <TextField
                    required
                    fullWidth
                    name="email"
                    type="email"
                    size="large"
                    onChange={Handleinput}
                    value={inputvalue.email}
                    label="Email Address"
                    placeholder="Enter Email"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: Loginstyle.myTextField,
                    }}
                    InputLabelProps={{
                      style: Loginstyle.myLabel,
                    }}
                  />
                </Grid>
                <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    onChange={Handleinput}
                    value={inputvalue.password}
                    type={inputvalue.showPassword ? "text" : "password"}
                    size="large"
                    label=" Password"
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            sx={{ color: "#757575", fontSize: "18px" }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {inputvalue.showPassword ? (
                              <VisibilityOffIcon sx={{ color: "#757575" }} />
                            ) : (
                              <VisibilityIcon sx={{ color: "#757575" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  paddingX: { lg: "60px", md: "40px", sm: "20px", xs: "15px" },
                }}
              >
                <Grid item xs={6}>
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
                          fontSize: { md: "16px", sm: "16px", xs: "10px" },
                        }}>
                        Remember me
                      </Typography>
                    }
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  spacing={2}
                  sx={{
                    marginTop: { md: "12px", sm: "10px", xs: "10px" },
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link to="/forgotpassword" style={Loginstyle.loginlink}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        lineHeight: { md: "19.6pxpx", sm: "12px", xs: "15px" },
                        fontSize: { md: "14px", sm: "10px", xs: "10px" },
                      }}
                    >
                      Forgot password?
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={spacing} justifyContent="center">
                <Grid item md={10} sm={12} xs={12}>
                  <Link to="/Editprofile" style={Loginstyle.loginlink}>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                      sx={Loginstyle.loginbutton}
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Login Now
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <CssBaseline />
          <Signup />
        </Grid>
      </Grid>

      <Callsupport />
      </Layout>
    </ThemeProvider>
  );
};

export default Login;
