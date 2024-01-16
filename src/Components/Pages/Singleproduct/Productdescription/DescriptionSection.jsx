import React, { useState } from 'react';
import './Products.css';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box,Grid, Tab, Tabs } from "@mui/material";
import { Divider } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
   return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children} {/* Render the content here */}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function App() {
  const [value, setValue] = React.useState(0);
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const StyledTab = styled(Tab)({
    color: "#7F7F7F",
    fontWeight: "600",
    lineHeight: "43.5px", // Remove media queries
    fontFamily: ["Poppins", "sans-serif"],
    "&.Mui-selected": {
      color: "#F7941D",
    },
  });

  return (
    <Box sx={{border: "1px solid #D5D5D5",marginX: {md:"70px",sm:'35px',xs:'40px'},
    borderRadius:'15px',
  }}>
     <Grid
        item
        container
        sx={{
          backgroundColor: "white",
        }}>
        <Grid item lg={12} md={12} sm={12} xs={12} >
           <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                variant="scrollable"
                sx={{
                  overflowX: "auto",
                  ".MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
                aria-label="basic tabs example">
                <StyledTab
                  label="Description"
                  {...a11yProps(0)}
                  sx={{ fontSize: "12px" }} // Remove media queries
                />
                <StyledTab
                  label="Shipping Details"
                  {...a11yProps(1)}
                  sx={{ fontSize: "12px" }} // Remove media queries
                />
           </Tabs>
            </Grid>
          </Grid>
        </Grid>
       </Grid>
      <Divider/>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} >
         <Grid item lg={12} md={12} xs={12} sm={12} >
          <div className="products" >
       <CardContent>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis
        </Typography>
      </CardContent>
      </div>
          </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} >
         <Grid item lg={12} md={12} xs={12} sm={12} >
          <div className="products" >
         <CardContent>
       <Typography variant="body2" color="text.secondary">
       <span  style={{
                   fontWeight:900
                  }} > Estimated Delivery Time:</span> IExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <span  style={{
                   fontWeight:900
                  }} > Return Process:</span> IExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <span  style={{
                   fontWeight:900
                  }} > Estimated Delivery Time:</span> IExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <span  style={{
                   fontWeight:900
                  }} > Return Process:</span> IExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        </Typography>
      </CardContent>
      </div>
          </Grid>
      
        </Grid>
      </TabPanel>
    </Box>
  );
}
