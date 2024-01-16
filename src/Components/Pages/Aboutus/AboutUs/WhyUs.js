import React from "react";
import pic1 from "../../../images/Home.png";
import pic2 from "../../../images/scondicon.png";
import pic3 from "../../../images/carimage.png";
import tickimage from "../../../images/Tick Image.png";
import { Box,  Grid,Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const WhyUs = () => {
  const data = [
    {
      pic: pic1,
      counting: "1000 +",
      title: "Our Categories",
    },
    {
      pic: pic2,
      counting: "3467 +",
      title: "Our Products",
    },
    {
      pic: pic3,
      counting: "23,688 +",
      title: "Successful Delivery",
    },
  ];
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingX: { md: "80px", sm: "50px", xs: "30px" },
          marginTop: "46px",
        }}>
        <Grid item md={7} sm={12} xs={12}>
          <Typography sx={{fontSize:{md:"45px",sm:"35px",xs:"30px"},fontWeight:"700"}}> Why Us? </Typography>
          <Typography sx={{width:{lg:'80%',md:"90%",sm:"100%",xs:"100%"},paddingBottom:"10px"}}>
            You offer a good product, make advertising, analyze the market but
            still have no improvement? Our qulificated specialists are
            ready to  solve any of your problems. We work with the newest
            techniques  and create strategies to catch more customers for
            you.
          </Typography>
           <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Professional Team</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Affordable Price</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">
              Achieve a Specific Goal
            </div>
          </div>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
         
            <Grid
              container
              spacing={2}
              className="right-div-box">
              <Grid item xs={12}>
              {data.map((item, index) => (
  <List
    key={index}
    sx={{
      backgroundColor: "#F7941D",
      marginBottom: { md: "0", sm: "0", xs: "20px" },
      color: '#FFFFFF'
    }}
  >
    <ListItem>
      <ListItemAvatar>
        <img src={item.pic} alt="icon-image" />
      </ListItemAvatar>
      <ListItemText
        sx={{ padding: "10px" }}
        primary={
          <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: '600' }}>
            {item.counting}
          </Typography>
        }
        secondary={
          <Typography sx={{ color: '#FFFFFF' }}>
            {item.title}
          </Typography>
        }
      />
    </ListItem>
    {index !== data.length - 1 && <Divider sx={{ backgroundColor: "white" }} />}
  </List>
))}
      </Grid>
            </Grid>
   
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
