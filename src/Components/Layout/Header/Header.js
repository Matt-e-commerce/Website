import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Headertwo from "../Headertwo/Headertwo";
import { Popover, Button,Stack,Tabs,Tab,Popper,CardMedia,AppBar,Box,Typography,Divider,
  List,ListItem ,ListItemButton,Drawer,ListItemText ,Toolbar,
  Grid,Fade
} from "@mui/material";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import Saleimage1 from "../../images/Saleimage1.png";
import Saleimage2 from "../../images/Saleimage2.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import HouseIcon from "@mui/icons-material/House";
import AirplayIcon from "@mui/icons-material/Airplay";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import Headerstyle from "../Header/Header.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import imagewatch from "../../images/MOBILE PHONE.png";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../images/logo.png";
import { createTheme } from "@mui/material/styles";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`v-pills-${index}`}
      aria-labelledby={`v-pills-${index}-tab`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#2E3192",
          height: 3,
          color: "#2E3192",
          fontWeight: "bold",
        },
      },
    },
  },
});
function Header() {
  const cartCount=useSelector(state=>state.cart.itemCount);
  
  const navItems = [
    <Link
    to="/home"
    style={Headerstyle.linkstyle}>
    <Typography>Home </Typography>
    </Link>,
    <Link
    to="/about"
    style={Headerstyle.linkstyle}>
    <Typography>About </Typography>
    </Link>,
        <Link
        to="/product"
        style={Headerstyle.linkstyle}>
        <Typography>Product </Typography>
        </Link>,
        
    <Link
    to="/Shoppingcartpage"
    style={Headerstyle.linkstyle}>
    <Typography>Shop Now </Typography>
    </Link>,
    "Flash Deals",
    "Daily Deals",
    <Link
    to="/contact"
    style={Headerstyle.linkstyle}>
    <Typography>Contact </Typography>
    </Link>,
  
  ];
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMegaMenuAnchorEl(null);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const [popperAnchorEl, setPopperAnchorEl] = React.useState(null);

  const handlePopperClick = (event) => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  const isPopperOpen = Boolean(popperAnchorEl);
  const popperId = isPopperOpen ? "simple-popper" : undefined;

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>

     <Divider />
      <List>
      <img src={Logo} style={{ width: "100%" }} />
         {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <Headertwo />
      <AppBar
        position="static"
        sx={Headerstyle.Appbarstyle}>
        <Toolbar disableGutters variant="dense">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{display:{lg:"none",xs:"flex"}}}>
            <MenuIcon />
          </IconButton>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpen}
              className="global-button-style"
              sx={Headerstyle.allCategoriesButton}>
              <MenuIcon sx={Headerstyle.icon}/>
              All Categories
            </Button>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              sx={{
                ".css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
                  backgroundColor: "transparent",
                  boxShadow: "0px 0px 0px 0px",
                },
              }} >
              <Box>
                <div style={{ display: "flex",marginTop:'65px' }}>
                  {/* Leftcard (Tab List) */}
                  <Box
                    sx={Headerstyle.Leftcard}>
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      id="v-pills-tab"
                      
                    >
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Laptop and Mac
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <StayCurrentPortraitIcon
                               sx={Headerstyle.Tabicon}/>
                              <Typography sx={{ fontSize: "12px" }}>
                                Mobile & Tablet
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <HouseIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Home Devices
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />

                      <Divider />
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <FitnessCenterIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Fitness and Fitness
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "15px" }}>
                                TV & Audio
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <AirplayIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Game & Toys
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Accessories
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider/>
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <SettingsIcon sx={Headerstyle.Tabicon} />
                              <Typography sx={{ fontSize: "16px" }}>
                                Settings
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />
                    </Tabs>
                  </Box>

                  {/* Right Card (Tab Content) */}
                  <Box
                    sx={{
                      flex: 4,
                      border: "1px solid white",
                      borderRadius: "5px",
                      padding: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                   <Grid md={4} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "20px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}>
                  Laptop And Mac
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Networking & Internet Devices
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Laptop, Dekstop & Monitors
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Hard Drive & Memory Cards
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Computer Accessories
                </Typography>

              </Grid>
              <Grid md={4} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"

                >
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                About Us
                </Typography>
        

              </Grid>
              <Grid md={4} sm={4} xs={6}>
                <img src={imagewatch} style={{width:"100%"}}/>
                
        

              </Grid>
            </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      Content for Settings tab
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                      Content for Settings tab
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={9}>
                      Content for Settings tab
                    </TabPanel>
                  </Box>
                </div>
              </Box>
            </Popover>
              <Popover
              open={Boolean(megaMenuAnchorEl)}
              anchorEl={megaMenuAnchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right", // Change this to "right"
              }}
              transformOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              sx={{
                marginLeft: "30px", // Add spacing here
              }}>
              <Grid
                spacing={2}
                container
                sx={{
                  marginTop: "30px",
                  paddingX: "20px",
                  backgroundColor: "white",
                }} >
                <Grid md={3} sm={4} xs={6}>
                  <Typography
                    variant="subtitle1"
                    sx={Headerstyle.Contactheading} >
                    Contact
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Leadership
                  </Typography>
                  <Typography variant="subtitle1">
                    Investor Relations
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Careers
                  </Typography>

                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Contact Us
                  </Typography>
                </Grid>
                 <Grid md={3} sm={4} xs={6}>
                  <Typography
                    variant="subtitle1"
                    sx={Headerstyle.Contactheading} >
                    Top Categories
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Leadership
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Investor Relations
                  </Typography>
                  <Typography variant="subtitle1" sx={Headerstyle.Tabsublistitem}>
                    Careers
                  </Typography>

                  <Typography variant="subtitle1"  sx={Headerstyle.Tabsublistitem}>
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <img src={Saleimage1} />
                  <img src={Saleimage2} />
                </Grid>
              </Grid>
            </Popover>
          </div>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            }}>
            <Box sx={Headerstyle.nav}>
              <Link
                to="/home"
                style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>Home</Typography>
              </Link>
              <Link
                to="/about"
                style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.navItem}>About</Typography>
              </Link>
              <Link
                to="/product"
                style={Headerstyle.linkstyle}
              >
                <Typography sx={Headerstyle.navItem}>Shop Now</Typography>
              </Link>
              <Link
                to="/Shoppingcartpage"
                style={Headerstyle.linkstyle}
              >
                <Typography sx={Headerstyle.navItem}>Flash Deals</Typography>
              </Link>
              <Typography sx={Headerstyle.navItem}>Daily Deals</Typography>
              <Link
                to="/contact"
                style={Headerstyle.linkstyle}>
                <Typography sx={Headerstyle.Contactusitem}>Contact</Typography>
              </Link>
              <Stack direction="row">
                <Link
                  to="/login"
                  style={Headerstyle.linkstyle}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="quote-button global-button-style"
                    sx={Headerstyle.QuoteButton}>
                    Login Account
                  </Button>
                </Link>
              </Stack>
              <IconButton
                aria-describedby={popperId}
                type="button"
                onClick={handlePopperClick}
                sx={Headerstyle.Carticonbuttonstyle}>
                <Link
                  to="/Shoppingcartpage"
                  style={Headerstyle.linkstyle}>
                   <Badge badgeContent={cartCount} color="secondary" overlap="circular">
                    <ShoppingCartIcon sx={{ color: "white"}}/>
                   </Badge>
                   </Link>
              </IconButton>
               {/* <Popper
                id={popperId}
                open={isPopperOpen}
                anchorEl={popperAnchorEl}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        border: 1,
                        p: 3,
                        backgroundColor: "#F7F7F7",
                        borderColor: "#F7F7F7",
                      }}>
                      <Grid container spacing={1} sx={{ marginTop: "0px" }}>
                        <Grid item md={2} xs={2}>
                          <CardMedia
                            component="img"
                            image={imagewatch}
                            sx={{ height: "100%" }}
                            alt="Paella dish"
                          />
                        </Grid>
                        <Grid item md={9} xs={8}>
                          <Typography
                            sx={{
                              color: "#555151",
                              fontWeight: "400",
                              fontSize: {
                                lg: "18px",
                                md: "30px",
                                sm: "20px",
                                xs: "24px",
                              },
                            }}
                          >
                            Samsung - Galaxy S6 4G LTE with <br /> 32GB Memory
                            Cell Phone
                          </Typography>
                          <Typography
                            sx={{
                              color: "#F7941D",
                              fontWeight: "600",
                              fontSize: {
                                lg: "20px",
                                md: "30px",
                                sm: "16px",
                                xs: "22px",
                              },
                            }}
                          >
                            1 x $250.00
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          md={1}
                          xs={2}
                          sx={{ marginTop: "10px", textAlign: "end" }}
                        >
                          <CloseIcon  onClick={handlePopperClick} />
                        </Grid>
                      </Grid>
                   
                      <br />
                      <br />
                      <Divider />
                      <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                        <Grid item md={6} xs={8}>
                          <Typography
                            sx={{
                              color: "#362F2F",
                              fontWeight: "600",
                              fontSize: {
                                lg: "18px",
                                md: "30px",
                                sm: "20px",
                                xs: "24px",
                              },
                            }}
                          >
                            SubTotal:
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          md={6}
                          xs={2}
                          sx={{ marginTop: "10px", textAlign: "end" }}
                        >
                          <Typography
                            sx={{
                              color: "#F7941D",
                              fontWeight: "400",
                              fontSize: {
                                lg: "18px",
                                md: "30px",
                                sm: "20px",
                                xs: "24px",
                              },
                            }}
                          >
                            $4,243.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                        <Grid item md={6} xs={8}>
                      
                           <Link
                           to="/Shoppingcartpage"
                           style={Headerstyle.linkstyle}
                         >
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                              paddingX: "20px",
                              borderRadius: "20px",
                              paddingY: "10px",
                              color: "white",
                            }}
                          >
                            View Cart
                          </Button>
                          </Link>
                        </Grid>
                        <Grid item md={6} xs={2} sx={{ textAlign: "end" }}>
                          <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{
                              paddingX: "20px",
                              borderRadius: "20px",
                              paddingY: "10px",
                            }} >
                            Check Out
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Fade>
                )}
              </Popper> */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
