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
import axios from "axios";
import Layout from "../../Layout/Layout";

const Signup = () => {
  const [inputvalue, setinputvalue] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
    showPassword: false,
  });
  const handleSubmit = async (event) => {
    try {
      const user = {
        firstName: inputvalue.name,
        lastName: inputvalue.lname,
        email: inputvalue.email,
        password: inputvalue.password,
        confirmPassword: inputvalue.confirmpassword,
      };
      const response = await axios.post(
        "https://e-commerce-qubi.vercel.app/api/auth/user/register",
        user
      );
      console.log(response.data);
    } catch (error) {
      // Handle other errors
      console.log("Error:", error.response.data);
    }
  };

  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
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

    <div>
      <Card sx={Signupstyle.cardstyle}>
        <Typography variant="subtitle1" sx={Signupstyle.Signupheading}>
          Sign up
        </Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={spacing}>
            <Grid item md={6} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="name"
                value={inputvalue.name}
                type="Name"
                size="large"
                label="Name"
                placeholder="Name"
                onChange={Handleinput}
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
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="lname"
                value={inputvalue.lname}
                type="Name"
                size="large"
                label="Last Name"
                placeholder="Last Name"
                onChange={Handleinput}
                InputProps={{
                  startAdornment: (
                    <PermIdentityIcon
                      style={{
                        color: "#6D6868", // Adjust the color as needed
                        marginRight: "8px", // Adjust the spacing as needed
                      }}
                    />
                  ),
                  style: Signupstyle.myTextField,
                }}
                InputLabelProps={{
                  style: Signupstyle.myLabel,
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={spacing}
            sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
          >
            <Grid item md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="email"
                value={inputvalue.email}
                type="email"
                size="large"
                label="Email Address "
                placeholder="Email Address"
                onChange={Handleinput}
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
            </Grid>
          </Grid>
          <Grid
            container
            spacing={spacing}
            sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
          >
            <Grid item md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={inputvalue.password}
                type={inputvalue.showPassword ? "text" : "password"}
                size="large"
                label="Password"
                placeholder="Password"
                onChange={Handleinput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "#757575", fontSize: "18px" }} />
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
                  style: Signupstyle.myTextField,
                }}
                InputLabelProps={{
                  style: Signupstyle.myLabel,
                }}
              />
            </Grid>
            <Grid item md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="confirmpassword"
                value={inputvalue.confirmpassword}
                type={inputvalue.showPassword ? "text" : "password"}
                size="large"
                label="Confirm Password"
                placeholder="Confirm Password"
                onChange={Handleinput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "#757575", fontSize: "18px" }} />
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
                  style: Signupstyle.myTextField,
                }}
                InputLabelProps={{
                  style: Signupstyle.myLabel,
                }}
              />
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
            onClick={() => {handleSubmit()}} >
            Register Me
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Signup;
