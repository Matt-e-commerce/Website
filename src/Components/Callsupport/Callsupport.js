import React from 'react'
import {
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";

import { IconButton } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Useimage from '../images/user.png'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const Callsupport = () => {
  const buttonStyle1 = {
    backgroundColor: "#F3F3F3", // Change this to your desired background color
    color: "#182733", // Change this to the text color you want
    borderRadius: "23px",
    height: "45.42px",
    width: "50px",
  };

  return (
    <div>
      <br/>
      <br/>
  
  <Divider/>
     <Grid
        container
        sx={{ paddingX:{md: "50px",sm:'60px',xs:'50px'}, marginTop: {md:"120px",sm:'40px',xs:'10px'} ,
       border:{md: (theme) => `2px solid ${theme.palette.divider}`,sm:'none',xs:'none'},borderRadius:'15px',padding:'20px'}}>
          <Grid item  md={3} sm={6}  xs={12} sx={{paddingBottom:'30px'}}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
                <img src={Useimage} />
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography
                 variant="h6"
               sx={{ fontWeight: "700"}}>
                Call Support
              </Typography>
              <Typography noWrap>Online Support 24/7</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={3} sm={6}  xs={12}  sx={{paddingBottom:'30px'}}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
                <GppGoodIcon sx={{color:'green'}} />
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography 
                 variant="h6"
              sx={{ fontWeight: "700"}}>
                Guarantee
              </Typography>
              <Typography
              variant="body2"
              sx={{ fontWeight: "400"}}>
                Money Back Guarantee</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={3} sm={6}  xs={12}  sx={{paddingBottom:'30px'}}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
                <CardGiftcardIcon sx={{color:'#F7941D'}} />
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography
               variant="subtitle2"
               

               sx={{ fontWeight: "700" ,fontSize:'22px'}}>
                Special Gifts
              </Typography>
              <Typography 
              variant="body2"
              sx={{ fontWeight: "400"}}
              noWrap>Receive special gifts</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={3} sm={6}  xs={12}  sx={{paddingBottom:'30px'}}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <IconButton type="button" style={buttonStyle1}>
                <AirportShuttleIcon  sx={{color:'#F7941D'}}/>
              </IconButton>
            </Stack>
            <Stack sx={{ minWidth: 0 }}>
              <Typography 
              variant="h6"
              sx={{ fontWeight: "700" }}>
                Shipping
              </Typography>
              <Typography 
              variant="body2"
              sx={{ fontWeight: "400"}}
              noWrap>Worldwide shipping upto $99</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Divider/>
    </div>
  )
}

export default Callsupport
