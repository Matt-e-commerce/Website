import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Card
} from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from '@mui/material';
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Layout from "../../Layout/Layout";

const Changepassword = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const [passwordValues, setPasswordValues] = useState({
    password: '',
    showPassword: false,
  });

  const [AgainPasswordValues, setAgainPasswordValues] = useState({
    AgainPassword: '',
    showPassword: false,
  });
  const HandleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPasswordValues({
        ...passwordValues,
        [name]: value,
      });
    } else if (name === 'AgainPassword') {
      setAgainPasswordValues({
        ...AgainPasswordValues,
        [name]: value,
      });
    }
  };

  const TogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordValues({
        ...passwordValues,
        showPassword: !passwordValues.showPassword,
      });
    } else if (field === 'AgainPassword') {
      setAgainPasswordValues({
        ...AgainPasswordValues,
        showPassword: !AgainPasswordValues.showPassword,
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Box>
        <Grid container sx={{marginTop:{md: "50px",sm:"40px",xs:"20px" },paddingX: {md: '30px', sm: '20px', xs: '10px'}}}>
          <Grid
            item
            lg={3}
            md={12}
            sm={12}
            xs={11}>
            <Leftsidebar/>
          </Grid>
          <Grid
            item
            lg={9}
            md={12}
            sm={12}
            xs={11} >
            <Grid container sx={{paddingX: {md:'55px', sm: '30px', xs: '20px' }}}>
              <Grid item lg={8} md={12} sm={12} xs={12}   >
                <Card
                  sx={{
                    backgroundColor: 'white',
                    padding: { md: '20px', sm: '40px', xs: '0px' },
                    boxShadow: "0px 0px 0px 0px",
                    border: "1px solid #D5D5D5",
                    borderRadius: '12px',
                    padding: { md: "0px", sm: "20px", xs: "10px" }
                  }}>
                  <Grid container >
                    <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "600",
                          lineHeight: { md: "40.12px", sm: "50px", xs: "40px" },
                          fontSize: { md: "40px", sm: "30px", xs: "20px" },
                          textAlign: { md: "start", sm: "start", xs: "center"}
                        }}>
                        Change Password
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          lineHeight: { md: "71.12px", sm: "30px", xs: "30px" },
                          textAlign: { md: "start", sm: "start", xs: "center" }
                        }}>
                        To Change password please input the details.
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        value={passwordValues.password}
                        type={passwordValues.showPassword ? 'text' : 'password'}
                        onChange={HandleInput}
                        size="large"
                        label="Current Password"
                        placeholder="Enter Password"
                        sx={{ marginTop: { md: '0', sm: '30px', xs: '20px' } }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon sx={{ color: '#757575', fontSize: '18px' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => TogglePasswordVisibility('password')} edge="end">
                                {passwordValues.showPassword ? (
                                  <VisibilityOffIcon sx={{ color: '#757575' }} />
                                ) : (
                                  <VisibilityIcon sx={{ color: '#757575' }} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }} />
                      <br />
                      <br />
                      <TextField
                        required
                        fullWidth
                        name="password"
                        value={passwordValues.password}
                        type={passwordValues.showPassword ? 'text' : 'password'}
                        size="large"
                        label=" New Password"
                        placeholder="Password"
                        onChange={HandleInput}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon sx={{ color: '#757575', fontSize: '18px' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => TogglePasswordVisibility('password')} edge="end">
                                {passwordValues.showPassword ? (
                                  <VisibilityOffIcon sx={{ color: '#757575' }} />
                                ) : (
                                  <VisibilityIcon sx={{ color:'#757575'}} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <br/>
                      <br/>
                      <br/>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        value={passwordValues.password}
                        type={passwordValues.showPassword ? 'text' : 'password'}
                        size="large"
                        label=" Again Password"
                        placeholder="Password"
                        onChange={HandleInput}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon sx={{ color: '#757575', fontSize: '18px' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => TogglePasswordVisibility('password')} edge="end">
                                {passwordValues.showPassword ? (
                                  <VisibilityOffIcon sx={{ color: '#757575' }} />
                                ) : (
                                  <VisibilityIcon sx={{ color:'#757575'}} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <br />

                  <Grid container spacing={spacing} justifyContent="center">
                    <Grid item md={10} sm={12} xs={12}>
                      <Link to="/Forgotemail">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{
                            boxShadow: "0px 0px 0px 0px",
                            paddingX: "25px",
                            borderRadius: '12px',
                            paddingY: { md: "10px", sm: "8px", xs: "5px" },
                            fontSize: { md: "18px", sm: "15px", xs: "15px" },
                            textTransform: "lowercase",
                            color: 'white'
                          }}
                        >
                          Update Password
                        </Button>
                      </Link>
                    </Grid>

                  </Grid>

                </Card>
              </Grid>


            </Grid>



          </Grid>
        </Grid>


        <Callsupport />

      </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Changepassword;
