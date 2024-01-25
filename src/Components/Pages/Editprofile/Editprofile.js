import React, { useState, useEffect } from "react";
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
import {
  profileSetupAsync,
  getUserAsync,
} from "../../../redux/Slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../../Layout/Layout";

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset, // Destructure the reset function from react-hook-for
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const fetchData = async () => {
      const user = await dispatch(getUserAsync());
      setUserInfo(user?.payload);

      // Set default values for the form fields
      Object.keys(user?.payload).forEach((key) => {
        setValue(key, user?.payload[key]);
      });
    };
    fetchData();
  }, [dispatch, setValue]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file===> ");
    setSelectedFile(file);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const onSubmit = async (data) => {
    console.log(selectedFile, "selectedFile===> in the on submit");
    const userData = {
      ...data,
      profilePic: selectedFile,
    };
    try {
      const response = await dispatch(profileSetupAsync(userData));
       console.log(response)
      if (response?.type === "auth/setUpProfile/fulfilled") {
        // Display success toast
        toast.success("Profile SetUp successfully!");
        // Reset the form values
        reset();
        // Redirect to securitypage
        // navigate("/securitypage");
      } else {
        // Display error toast with backend error message
        toast.error(`Please try again. ${response?.error?.message}`);
      }
    } catch (error) {
      // Handle other errors
      toast.error(`An error occurred. Please try again. ${error.message}`);
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    onChange={handleFileChange}
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
                            maxWidth: "200px", // Adjust the maximum width as needed
                            maxHeight: "200px", // Adjust the maximum height as needed
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

              <Box noValidate sx={{ mt: 3 }}>
                <Grid
                  container
                  spacing={5}
                  sx={{ paddingX: { md: "0", sm: "30px", xs: "20px" } }}
                >
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      size="large"
                      defaultValue={userInfo?.firstName}
                      {...register("firstName", { required: true })}
                      label="First Name"
                      placeholder="First Name"
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
                    {errors.firstName?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        First name is required
                      </p>
                    )}
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      size="large"
                      defaultValue={userInfo?.lastName}
                      {...register("lastName", { required: true })}
                      label="Last Name*"
                      placeholder="Last Name"
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
                    {errors.lastName?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        Last name is required
                      </p>
                    )}
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
                      fullWidth
                      type="email"
                      size="large"
                      name="email"
                      label="Email Address*"
                      defaultValue={userInfo?.email}
                      {...register("email", { required: true })}
                      placeholder="example@gmail.com"
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
                    {errors.email?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        Email is required
                      </p>
                    )}
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
                      fullWidth
                      type="number"
                      size="large"
                      name="phonenumber"
                      label="Phone No*"
                      {...register("phoneNumber", { required: true })}
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
                    {errors.phoneNumber?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        PhoneNumber is required
                      </p>
                    )}
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
                      fullWidth
                      name="country"
                      {...register("country", { required: true })}
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
                    {errors.country?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        Country is required
                      </p>
                    )}
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      fullWidth
                      name="city"
                      {...register("city", { required: true })}
                      type="text"
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
                    {errors.city?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        City is required
                      </p>
                    )}
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
                      fullWidth
                      name="zipCode"
                      {...register("zipCode", { required: true })}
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
                    {errors.zipCode?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        ZipCode is required
                      </p>
                    )}
                  </Grid>
                  <Grid item lg={6} md={12} xs={12} sm={12}>
                    <TextField
                      fullWidth
                      {...register("state", { required: true })}
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
                    {errors.state?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        State is required
                      </p>
                    )}
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
                      fullWidth
                      type="text"
                      size="large"
                      label="Street  Address*"
                      {...register("streetAddress", { required: true })}
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
                    {errors.streetAddress?.type === "required" && (
                      <p role="alert" style={{ color: "#F7941D" }}>
                        StreetAddress is required
                      </p>
                    )}
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
                    fullWidth
                    type="text"
                    size="large"
                    {...register("shippingAddress")}
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
          <ToastContainer/> 
        </Box>
      </form>
    </Layout>
  );
};

export default Sidebar;
