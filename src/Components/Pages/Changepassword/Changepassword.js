import React from "react";
import { Typography, Box, TextField, Button, Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { changePasswordAsync } from "../../../redux/Slices/authSlice";
import Layout from "../../Layout/Layout";
import { ToastContainer, toast } from "react-toastify";

const Changepassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(changePasswordAsync(data));
      if (response?.type === "auth/changePass/fulfilled") {
        toast.success("Change Password successfully!");
        reset();
        //navigate it towards the login page after the fill the form
        navigate("/login")
      } else {
        toast.error(
          `ChangePassword failed. Please try again. ${response?.error?.message}`
        );
      }
    } catch (error) {
      toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Grid container sx={{ marginTop: "50px", paddingX: "30px" }}>
              <Grid item lg={3} md={12} sm={12} xs={11}>
                <Leftsidebar />
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={11}>
                <Grid container sx={{ paddingX: "55px" }}>
                  <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Card
                      sx={{
                        backgroundColor: "white",
                        padding: "20px",
                        boxShadow: "0px 0px 0px 0px",
                        border: "1px solid #D5D5D5",
                        borderRadius: "12px",
                      }}
                    >
                      <Grid container>
                        <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: "600", lineHeight: "40px", fontSize: "40px", textAlign: "start" }}>
                            Change Password
                          </Typography>
                          <Typography variant="subtitle1" sx={{ lineHeight: "30px", textAlign: "start" }}>
                            To change the password, please input the details.
                          </Typography>
                          <TextField
                            fullWidth
                            {...register("currentPassword", {
                              required: "Current Password is required",
                              pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                message: "Current Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                              },
                            })}
                            type={showPassword ? "text" : "password"}
                            size="large"
                            label="Current Password"
                            placeholder="Enter Current Password"
                            sx={{ marginTop: "20px", marginBottom: "10px" }}  // Adjusted the margin
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon sx={{ color: "#757575", fontSize: "18px" }} />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {watch("currentPassword") ? (
                                      <VisibilityOffIcon sx={{ color: "#757575" }} />
                                    ) : (
                                      <VisibilityIcon sx={{ color: "#757575" }} />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          {errors.currentPassword && (
                            <p role="alert" style={{ color: "#F7941D" }}>
                              {errors.currentPassword.message}
                            </p>
                          )}
                          <br />
                          <TextField
                            fullWidth
                            {...register("newPassword", {
                              required: "New Password is required",
                              pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                message: "New Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                              },
                            })}
                            type={showPassword ? "text" : "password"}
                            size="large"
                            label="New Password"
                            placeholder="Enter New Password"
                            sx={{ marginTop: "20px", marginBottom: "10px" }}  // Adjusted the margin
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockIcon sx={{ color: "#757575", fontSize: "18px" }} />
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {watch("newPassword") ? (
                                      <VisibilityOffIcon sx={{ color: "#757575" }} />
                                    ) : (
                                      <VisibilityIcon sx={{ color: "#757575" }} />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          {errors.newPassword && (
                            <p role="alert" style={{ color: "#F7941D" }}>
                              {errors.newPassword.message}
                            </p>
                          )}
                          <br />
                          <br />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container justifyContent="center">
                        <Grid item md={10} sm={12} xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                              boxShadow: "0px 0px 0px 0px",
                              borderRadius: "12px",
                              marginTop: "20px",
                            }}
                          >
                            Update Password
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Callsupport />
          </Box>
        </form>
        <ToastContainer />
      </Layout>
    </ThemeProvider>
  );
};

export default Changepassword;
