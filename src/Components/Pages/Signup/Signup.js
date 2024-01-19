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
import FormControlLabel from "@mui/material/FormControlLabel";
import LockIcon from "@mui/icons-material/Lock";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Signupstyle from "./Signup.style";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { signUpAsync, resetState } from "../../../redux/Slices/authSlice";
import Layout from "../../Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset, // Destructure the reset function from react-hook-for
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(signUpAsync(data));
      
      if (response?.type === "auth/signUp/fulfilled") {
        // Display success toast
        toast.success("Signup successfully!");
         // Reset the form values
        reset()
        // Redirect to securitypage
        navigate("/securitypage");
      } else {
        // Display error toast with backend error message
        toast.error(
          `Signup failed. Please try again. ${response?.error?.message}`
        );
      }
    } catch (error) {
      // Handle other errors
      toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };

  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <Card sx={Signupstyle.cardstyle}>
        <Typography variant="subtitle1" sx={Signupstyle.Signupheading}>
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={spacing}>
              <Grid item md={6} xs={12} sm={12}>
                <TextField
                  fullWidth
                  name="name"
                  type="text"
                  size="large"
                  label="Name"
                  {...register("firstName", { required: true })}
                  placeholder="Name"
                  InputProps={{
                    startAdornment: (
                      <PermIdentityIcon sx={Signupstyle.iconstyle} />
                    ),
                    style: Signupstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Signupstyle.myLabel,
                  }}
                />
                {errors.firstName?.type === "required" && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    First name is required
                  </p>
                )}
              </Grid>
              <Grid item md={6} xs={12} sm={12}>
                <TextField
                  fullWidth
                  name="lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                  InputProps={{
                    startAdornment: (
                      <PermIdentityIcon
                        style={{
                          color: "#6D6868",
                          marginRight: "8px",
                        }}
                      />
                    ),
                    style: Signupstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Signupstyle.myLabel,
                  }}
                />
                {errors.lastName?.type === "required" && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    Last name is required
                  </p>
                )}
              </Grid>
            </Grid>
            <Grid
              container
              spacing={spacing}
              sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
            >
              <Grid item md={12} xs={12} sm={12}>
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
                      <MailOutlineIcon sx={Signupstyle.iconstyle} />
                    ),
                    style: Signupstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Signupstyle.myLabel,
                  }}
                />
                {errors.email && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    {errors.email.message}
                  </p>
                )}
              </Grid>
            </Grid>

            <Grid
              container
              spacing={spacing}
              sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
            >
              <Grid item md={12} xs={12} sm={12}>
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
                    style: Signupstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Signupstyle.myLabel,
                  }}
                />
                {errors.password && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    {errors.password.message}
                  </p>
                )}
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type={showPassword ? "text" : "password"}
                  size="large"
                  label="Confirm Password"
                  placeholder="Confirm Password"
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
                    style: Signupstyle.myTextField,
                  }}
                  InputLabelProps={{
                    style: Signupstyle.myLabel,
                  }}
                />
                {errors.confirmPassword && (
                  <p role="alert" style={{ color: "#F7941D" }}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
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
                    }}
                  >
                    Remember me
                  </Typography>
                }
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={Signupstyle.Registerbutton}
              // onClick={() => {handleSubmit()}}
            >
              Register Me
            </Button>
          </Box>
        </form>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default Signup;
