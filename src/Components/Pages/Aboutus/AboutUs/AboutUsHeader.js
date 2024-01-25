import React from "react";
import { Grid, Button, Typography } from "@mui/material";
const About = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "0px" }}>
      <Grid item xs={12} >
        <Grid container spacing={2} className="about-main" sx={{ paddingX: {md:"80px" ,sm:'50px',xs:'30px'}, paddingY: {md:"100px",sm:'40px',xs:'30px'} }}>
          <Grid item md={12}  sm={12}  xs={12} className="about-content">
              <span>BRIEFLY ABOUT US</span>
              <h1>
                Large experience <br /> in sales
              </h1>
              <Typography sx={{width:{lg:'45%',md:"50%",sm:"60%"}}}>
                We have been working in the marketing sphere for more than 35
                years. During this time we successfully finished 10 000+
                projects.  Our company guarantee the quality that have been
                tested  over   the years.
              </Typography>
              <Button>Free Consultation</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
