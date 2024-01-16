import React from 'react';
import { Grid, Typography,  Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Fresh from '../../../images/dfresh.jpg';
import Amazon from '../../../images/dfresh.jpg';

const TrustedPartners = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  // Define responsive width and height based on screen size
  const width = isMd ? 50 : isSm ? 80 : 40;
  const height = width; // Make the height equal to the width for a square avatar

  return (
    <Box>
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign:'center' }}>
        <Typography  sx={{fontWeight:'600',fontSize: {md:'66px',sm:"40px",xs:"35px"},
}}>Our Trusted Partners</Typography>
        <Typography  sx={{color:'#484444',width:{md:"80%",sm:"70%",xs:"90%"},
                fontSize: {md:'19px',sm:"15px",xs:"15px"},margin:"auto"
  }}>
          You offer a good product, make advertising, analyze the market but
         still have no improvement?
        </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "20px" ,paddingX:'80px'}}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
           <img
                src={Fresh}
                alt="Trusted Partners"
                style={{ width: '100%'}}
              />
   </Grid>

          <Grid item lg={3} md={12} sm={12} xs={12}>
            
              <img
                src={Fresh}
                alt="Trusted Partners"
                style={{ width: '100%' }}
              />
           
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            
              <img
                src={Amazon}
                alt="Trusted Partners"
                style={{ width: '100%' }}
              />
          
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            
            <img
              src={Amazon}
              alt="Trusted Partners"
              style={{ width: '100%' }}
            />
        
        </Grid>
        </Grid>
        </Box>
   
   
  );
};

export default TrustedPartners;
