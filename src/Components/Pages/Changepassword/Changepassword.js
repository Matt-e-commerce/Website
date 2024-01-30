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
    reset, // Destructure the reset function from react-hook-for
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(changePasswordAsync(data));
      if (response?.type === "auth/changePass/fulfilled") {
        // Display success toast
        toast.success("Change Password successfully!");
         // Reset the form values
        reset()
        // Redirect to securitypage
        // navigate("/login");
      } else {
        // Display error toast with backend error message
        toast.error(
          `ChangePassword failed. Please try again. ${response?.error?.message}`
        );
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "40px", xs: "20px" },
                paddingX: { md: "30px", sm: "20px", xs: "10px" },
              }}
            >
              <Grid item lg={3} md={12} sm={12} xs={11}>
                <Leftsidebar />
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={11}>
                <Grid
                  container
                  sx={{ paddingX: { md: "55px", sm: "30px", xs: "20px" } }}
                >
                  <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Card
                      sx={{
                        backgroundColor: "white",
                        padding: { md: "20px", sm: "40px", xs: "0px" },
                        boxShadow: "0px 0px 0px 0px",
                        border: "1px solid #D5D5D5",
                        borderRadius: "12px",
                        padding: { md: "0px", sm: "20px", xs: "10px" },
                      }}
                    >
                      <Grid container>
                        <Grid
                          item
                          md={10}
                          sm={12}
                          xs={12}
                          sx={{ margin: "auto" }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "600",
                              lineHeight: {
                                md: "40.12px",
                                sm: "50px",
                                xs: "40px",
                              },
                              fontSize: { md: "40px", sm: "30px", xs: "20px" },
                              textAlign: {
                                md: "start",
                                sm: "start",
                                xs: "center",
                              },
                            }}
                          >
                            Change Password
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              lineHeight: {
                                md: "71.12px",
                                sm: "30px",
                                xs: "30px",
                              },
                              textAlign: {
                                md: "start",
                                sm: "start",
                                xs: "center",
                              },
                            }}
                          >
                            To Change password please input the details.
                          </Typography>
                          <TextField
                            fullWidth
                            {...register("currentPassword", {
                              required: "currentPassword is required",
                              pattern: {
                                value:
                                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                message:
                                  "currentPassword must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                              },
                            })}
                            type={showPassword ? "text" : "password"}
                            size="large"
                            label="currentPassword"
                            placeholder="currentPassword"
                            sx={{
                              marginTop: { md: "0", sm: "30px", xs: "20px" },
                            }}
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
                                  <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                  >
                                    {watch("currentPassword") ? (
                                      <VisibilityOffIcon
                                        sx={{ color: "#757575" }}
                                      />
                                    ) : (
                                      <VisibilityIcon
                                        sx={{ color: "#757575" }}
                                      />
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
                          <br />
                          <TextField
                            fullWidth
                            {...register("newPassword", {
                              required: "newPassword is required",
                              pattern: {
                                value:
                                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                message:
                                  "newPassword must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
                              },
                            })}
                            type={showPassword ? "text" : "password"}
                            size="large"
                            label="newPassword"
                            placeholder="newPassword"
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
                                  <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                  >
                                    {watch("newPassword") ? (
                                      <VisibilityOffIcon
                                        sx={{ color: "#757575" }}
                                      />
                                    ) : (
                                      <VisibilityIcon
                                        sx={{ color: "#757575" }}
                                      />
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
                          <br />
                        </Grid>
                      </Grid>
                      <br />

                      <Grid container spacing={spacing} justifyContent="center">
                        <Grid item md={10} sm={12} xs={12}>
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              fullWidth
                              sx={{
                                boxShadow: "0px 0px 0px 0px",
                                paddingX: "25px",
                                borderRadius: "12px",
                                paddingY: { md: "10px", sm: "8px", xs: "5px" },
                                fontSize: {
                                  md: "18px",
                                  sm: "15px",
                                  xs: "15px",
                                },
                                textTransform: "lowercase",
                                color: "white",
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
