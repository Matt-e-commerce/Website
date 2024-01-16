import React from "react";
import { Box, Divider,Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import Logo from "../../Components/images/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Chat from '../images/chat.png'
import Footerstyle from './Footer.style'


const Footer = () => {
  



  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <img src={Logo} style={{width:'20%'}} />
          <Typography
            variant="subtitle1"
            sx={Footerstyle .Footerparagraph}
            >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex  ea commodo con exercitation ullamco
            laboris nisi ut aliquip ex ea commodo con
          </Typography>
        </Grid>
        <Grid item md={11} sm={10} xs={12} sx={{ margin: "auto" }}>
          <Grid container sx={{ marginTop: "20px",paddingX:{md:'20px',sm:'20px',xs:'40px'} }}>
            <Grid item md={8} sm={12} xs={12} sx={{textAlign:{md:"start",sm:"center",xs:'center'}}}>
              <Typography
                variant="subtitle1"
                sx={Footerstyle.Expertheading}
              >
                Get Expert Tips In Your Inbox
              </Typography>
              <Typography
                variant="subtitle1"
                sx={Footerstyle.Expertsubheading}
              >
                Get Expert Tips In Your Inbox
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Paper
                component="form"
                sx={Footerstyle.paperstyle}
              >
                <TextField
                  id="search"
                  variant="outlined"
                  placeholder="Enter Your Mail"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    marginLeft: "auto",
                  }}
                />

                <Button
                  type="submit"
                  sx={Footerstyle.subscribebutton}
                >
                  Subscribe
                </Button>
              </Paper>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "30px" }}>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={Footerstyle.Socialheading}
                >
                  Social
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  <Box sx={{ display: "flex", alignItems: "center" ,color:'#7F7F7F',paddingBottom:'10px'}}>
                    <InstagramIcon sx={{color:'#7F7F7F'}} />
                    <span>Instagram</span>
                  </Box>
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  <Box sx={{ display: "flex", alignItems: "center" ,paddingBottom:'10px'}}>
                    <FacebookIcon sx={{color:'#7F7F7F'}} />
                    <span>Facebook</span>
                  </Box>
              
                </Typography>

           
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
               
                <Box sx={{ display: "flex", alignItems: "center",paddingBottom:'10px' }}>
                    < TwitterIcon sx={{color:'#7F7F7F'}} />
                    <span>Twitter</span>
                  </Box>
                </Typography>
                <Typography variant="subtitle1">
                <Box sx={{ display: "flex", alignItems: "center",paddingBottom:'10px' }}>
                    <  YouTubeIcon sx={{color:'#7F7F7F'}} />
                    <span>YouTube</span>
                  </Box>
                 
                
                  </Typography>
              </Grid>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={Footerstyle.Socialheading}

                >
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                About Us
                </Typography>
                <Typography variant="subtitle1">       About Us</Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Call us: +1 254 568-5479
                </Typography>

              </Grid>
              <Grid md={3} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={Footerstyle.Socialheading}

                >
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Privacy policy update
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Terms & conditions
                </Typography>
                <Typography variant="subtitle1">
                Site Map
                </Typography>

           
              </Grid>
              <Grid md={3} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={Footerstyle.Socialheading}

                >
                  About
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                About Us
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Customer Support
                </Typography>
                <Typography variant="subtitle1">
                Copyright
                </Typography>

            
              </Grid>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Top Categories
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Men's Wear
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Men's Wear
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Men's Wear
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Men's Wear
                </Typography>

              </Grid>
            </Grid>
          </Grid>
          <Divider/>
            <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "black",
                fontWeight: "300",
                lineHeight: { md: "22px", sm: "18px", xs: "15px" },
                fontSize: { md: "15px", sm: "12px", xs: "10px" },
                textAlign: "center",
                padding:'10px'
              }}
            >
     Copyright © 2023 We Have and You HaveAll rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <InputAdornment
        sx={{
          position: {md:"fixed",sm:'absolute',xs:'absolute'},
          bottom: { lg: "100px",md: "150px", sm: "530px", xs: "150px" },
          right: { md: "35px", sm: "25px", xs: "18px" },

          zIndex: 1,
        }}>
        <IconButton
          type="button"
       >
          < img src={Chat} style={{height:'100px'}} />
        </IconButton>
      </InputAdornment>
    </Box>
  );
};

export default Footer;
