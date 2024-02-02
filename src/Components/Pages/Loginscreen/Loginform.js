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
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {signInAsync} from "../../../redux/Slices/authSlice"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(signInAsync(data))
      if (response?.type === "auth/signIn/fulfilled") {
        // Display success toast
        localStorage.setItem("token", JSON.stringify(response.payload.token));
        toast.success("Signin successfully!");
        reset()
        navigate('/home')
      } else {
        // Display error toast with backend error message
      toast.error(`Signin failed. Please try again. ${response?.error?.message}`);
      }
    } catch (error) {
       // Handle other errors
    toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={spacing}>
                    <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                      <Typography
                        variant="subtitle1"
                        sx={Loginstyle.loginheading}
                      >
                        Login
                      </Typography>
                      <br />
                      <br />
                      <TextField
                        // required
                        fullWidth
                        name="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        size="large"
                        label="Email Address"
                        placeholder="Email Address"
                        InputProps={{
                          startAdornment: (
                            <MailOutlineIcon sx={Loginstyle.iconstyle} />
                          ),
                          style: Loginstyle.myTextField,
                        }}
                        InputLabelProps={{
                          style: Loginstyle.myLabel,
                        }}
                      />
                      {errors.email && (
                        <p role="alert" style={{ color: "#F7941D" }}>
                          {errors.email.message}
                        </p>
                      )}
                    </Grid>
                    <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                    <TextField
                  fullWidth
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      message:
                        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  size="large"
                  label="Password"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#757575", fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {watch("password") ? (
                            <VisibilityOffIcon sx={{ color: "#757575" }} />
                          ) : (
                            <VisibilityIcon sx={{ color: "#757575" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: Loginstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Loginstyle.myLabel,
                  }}
                />
                {errors.password && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    {errors.password.message}
                  </p>
                )}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      paddingX: {
                        lg: "60px",
                        md: "40px",
                        sm: "20px",
                        xs: "15px",
                      },
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
                              lineHeight: {
                                md: "19.6px",
                                sm: "12px",
                                xs: "15px",
                              },
                              fontWeight: "400",
                              fontSize: { md: "16px", sm: "16px", xs: "10px" },
                            }}
                          >
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
                            lineHeight: {
                              md: "19.6pxpx",
                              sm: "12px",
                              xs: "15px",
                            },
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
                      {/* <Link to="/Editprofile" style={Loginstyle.loginlink}> */}
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        sx={Loginstyle.loginbutton}
                        // onClick={() => {
                        //   handleSubmit();
                        // }}
                      >
                        Login Now
                      </Button>
                      {/* </Link> */}
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Card>
          <ToastContainer/>
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
