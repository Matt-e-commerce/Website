import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Checkbox,
  CardMedia,
} from "@mui/material";
import Profilepicture from "../../images/dashboardprofile.png";
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Editstyle from "./Editprofile.style";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
// import { signUpAsync, resetState } from "../../../redux/Slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../../Layout/Layout";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset, // Destructure the reset function from react-hook-for
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const onSubmit = async (data) => {
    try {
      // const response = await dispatch(signUpAsync(data));
      
      // if (response?.type === "auth/signUp/fulfilled") {
      //   // Display success toast
      //   toast.success("Signup successfully!");
      //    // Reset the form values
      //   reset()
      //   // Redirect to securitypage
      //   navigate("/securitypage");
      // } else {
      //   // Display error toast with backend error message
      //   toast.error(
      //     `Signup failed. Please try again. ${response?.error?.message}`
      //   );
      // }
    } catch (error) {
      // Handle other errors
      toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };
  return (
    <Layout>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid
            container
            sx={{ marginTop: { md: "40px", sm: "0px", xs: "50px" } }}
          >
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Leftsidebar />
            </Grid>
            <Grid
              item
              lg={5}
              md={12}
              sm={12}
              xs={12}
              sx={Editstyle.Pr0filesaction}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  paddingX: { md: "0", sm: "40px", xs: "30px" },
                }}
              >
                <Grid item lg={6} md={12} sm={12} xs={12}>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={Editstyle.Profileheading}
                  >
                    Profile
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    id="file-input"
                    style={{ display: "none" }}
                    // onChange={handleFileChange}
                  />
                  <label htmlFor="file-input">
                    <CardMedia
                      component="div"
                      sx={{
                        position: "relative",
                      }}
                    >
                      {/* Main image */}
                      {selectedFile ? (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected Image"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      ) : (
                        <img
                          src={Profilepicture}
                          alt="Default Image"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      )}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          cursor: "pointer",
                        }}
                      >
                        <CameraAltIcon
                          sx={{ color: "#F7941D", fontSize: "18px" }}
                        />
                      </Box>
                    </CardMedia>
                  </label>
                </Grid>
              </Grid>
              <Divider />
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid
                  container
                  spacing={5}
                  sx={{ paddingX: { md: "0", sm: "30px", xs: "20px" } }}
                >
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="name"
                      // value={inputvalue.name}
                      // onChange={Handleinput}
                      type="Name"
                      size="large"
                      label="First Name"
                      placeholder="NAFEES"
                      InputProps={{
                        startAdornment: (
                          <PermIdentityIcon sx={Editstyle.Iconstyle} />
                        ),
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      type="Name"
                      size="large"
                      name="lname"
                      // value={inputvalue.lname}
                      // onChange={Handleinput}
                      label="Last Name*"
                      placeholder="Nafees"
                      InputProps={{
                        startAdornment: (
                          <PermIdentityIcon sx={Editstyle.Iconstyle} />
                        ),
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    marginTop: { md: "1px", sm: "8px", xs: "8px" },
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item lg={12} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      size="large"
                      name="email"
                      // value={inputvalue.email}
                      // onChange={Handleinput}
                      label="Email Address*"
                      placeholder="nafeesurrehman5566@gmail.com"
                      InputProps={{
                        startAdornment: (
                          <MailOutlineIcon sx={Editstyle.Iconstyle} />
                        ),
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    marginTop: { md: "1px", sm: "8px", xs: "8px" },
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item lg={12} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      type="Phone"
                      size="large"
                      name="phonenumber"
                      // value={inputvalue.phonenumber}
                      // onChange={Handleinput}
                      label="Phone No*"
                      placeholder="+1 3493 3894 43"
                      InputProps={{
                        startAdornment: (
                          <PhonePausedIcon sx={Editstyle.Iconstyle} />
                        ),
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={5}
                  sx={{
                    marginTop: "10px",
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="country"
                      // value={inputvalue.country}
                      // onChange={Handleinput}
                      type="Country"
                      size="large"
                      label="Country"
                      placeholder="Romania"
                      InputProps={{
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="city"
                      // value={inputvalue.city}f
                      // onChange={Handleinput}
                      type="city"
                      size="large"
                      label="City"
                      placeholder="Bucharest"
                      InputProps={{
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={5}
                  sx={{
                    marginTop: "10px",
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="zipcode"
                      // value={inputvalue.zipcode}
                      // onChange={Handleinput}
                      size="large"
                      label="Zip Code"
                      placeholder="46564"
                      InputProps={{
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="state"
                      // value={inputvalue.state}
                      // onChange={Handleinput}
                      type="text"
                      size="large"
                      label="State*"
                      placeholder="Bucharest"
                      InputProps={{
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: "14px",
                          // Add other label text styles as needed
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    marginTop: { md: "10px", sm: "8px", xs: "8px" },
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item lg={12} md={12} xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      name="streetAddress"
                      // value={inputvalue.streetAddress}
                      // onChange={Handleinput}
                      type="text"
                      size="large"
                      label="Street  Address*"
                      placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
                      InputProps={{
                        startAdornment: (
                          <LocationOnIcon sx={Editstyle.Iconstyle} />
                        ),
                        style: Editstyle.myTextField,
                      }}
                      InputLabelProps={{
                        style: Editstyle.myLabel,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <Grid item md={6} sm={6} xs={12}>
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
                          Same as above
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
                <br />
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                  sm={12}
                  sx={{
                    paddingX: { md: "0", sm: "30px", xs: "20px" },
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    name="shippingAddress"
                    // value={inputvalue.shippingAddress}
                    // onChange={Handleinput}
                    type="text"
                    size="large"
                    label="Shipping Address*"
                    placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
                    InputLabelProps={{
                      style: Editstyle.myLabel,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={Editstyle.Iconstyle} />
                        </InputAdornment>
                      ),
                      style: Editstyle.myTextField,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography variant="body2">(Optional)</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  // onClick={() => {
                  //   handleSubmit();
                  // }}
                  sx={Editstyle.Saveprofilebutton}
                >
                  Save Profile
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Layout>
  );
};

export default Sidebar;
