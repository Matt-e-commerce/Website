import React from "react";
import { Box, Typography } from "@mui/material";
import VideoPlayer from "../../../../Videoplayer/Videoplayer";
import Faq from "../../../../FAQ/Faq";
import { Grid } from "@mui/material";
import Workstyle from "../HowWework/WorkUs.style";

const HowWeWork = () => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={Workstyle.workMain}>
          <Typography sx={Workstyle.workHeading}>How We Work</Typography>
          <Typography sx={Workstyle.workParagraph}>
            You offer a good product, make advertising, analyze the market but
          still have no improvement?
          </Typography>
           <VideoPlayer />
        </Grid>
      </Grid>
      <Faq />
    </Box>
  );
};

export default HowWeWork;
