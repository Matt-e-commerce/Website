import React from "react";
import Logo from "../../images/logo.png";
import {
  Box,Container,Typography,Popper,List, ListItem, ListItemText,
  TextField,Grid,Paper,Divider,Grow,FormControl
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Headertwostyle from '../Headertwo/Headertwo.style'

function TopNavbar() {
 const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const options = [
    "All Category",
    <Typography sx={{fontWeight:'600',color:'#F7941D'}}>Electronis </Typography>,
    <Typography>Components </Typography>,
    <Typography >Laptop </Typography>,
    <Typography >Monitors </Typography>,
    <Typography>Scanner </Typography>,
    <Typography sx={{fontWeight:'600',color:'#F7941D'}}>Furniture </Typography>,
    <Typography >Book Case </Typography>,

  ];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (value) => {
    setAge(value);
  };

  return (
    <Box sx={Headertwostyle.Headertwomain}>
   
            <Grid
              container
              spacing={2}
              sx={Headertwostyle.Headertwocontainer}  >
              <Grid item  md={7} sm={12} xs={12}>
                <img src={Logo} className=" logo-image" />
              </Grid>
              <Grid
                item
                md={5}
                sm={11}
                xs={12}
                sx={{marginLeft: {md:"auto",sm:'0',xs:'0'}}}>
                <Paper
                  component="form"
                  sx={Headertwostyle.Headertwopaper} >
                  <FormControl
                    sx={{ m: 1, minWidth: { lg: 140, md: 60, sm: 100, xs: 30 }}}
                    size="small">
                    <div>
                      <div ref={anchorRef}>
                        <Typography
                          variant="body2"
                          sx={Headertwostyle.Categoryheading}
                          onClick={handleToggle}
                        >
                          {age || "Category"}
                          <ArrowDropDownIcon />
                        </Typography>
                      </div>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        placement="bottom-start"
                      >
                        <Paper
                          sx={Headertwostyle.scrollbarstyle}
                        >
                          <List>
                            {options.map((option, index) => (
                              <ListItem
                                button
                                key={option}
                                onClick={() => handleMenuItemClick(option)}
                              >
                                <ListItemText primary={option} />
                              </ListItem>
                            ))}
                          </List>
                        </Paper>
                      </Popper>
                    </div>
                    <Popper
                      open={age !== null}
                      role={undefined}
                      transition
                      style={{ overflowX: "auto" }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>{/* Your Select menu items */}</Paper>
                        </Grow>
                      )}
                    </Popper>
                  </FormControl>

                  <Divider orientation="vertical" variant="middle" flexItem />

                  <TextField
                    id="search"
                    variant="outlined"
                    placeholder="What you looking for ?"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                  />

                  <IconButton
                    type="submit"
                    sx={Headertwostyle.IconButtonstyle}  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <div class="search-box">
     <input class="search-txt" type="text" name="" placeholder="Type a Search"/>
<a class="search-btn" href="#">
  <SearchIcon />
 
</a>
</div>
              </Grid>
            </Grid>
       
   
    </Box>
  );
}

export default TopNavbar;
