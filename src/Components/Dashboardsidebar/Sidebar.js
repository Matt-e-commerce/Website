import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "../../redux/Slices/authSlice";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Redwatch from "../../Components/images/dashboardprofile.png";
import {StyledList} from "./SideBarStyle"
export default function PermanentDrawerLeft({ children }) {
  const dispatch=useDispatch() 
  const [userInfo, setUserInfo] = useState({}); 
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const user = await dispatch(getUserAsync());
      setUserInfo(user?.payload);
    };
    fetchData();
  }, [dispatch]);
  const CustomListItem = ({ to, primary }) => (
    <ListItem
      button
      component={Link}
      to={to}
      selected={
        to === location.pathname ||
        (to === "/" && location.pathname === "/default-route")
      }
      onClick={() => setIsClicked(!isClicked)}
    >
      <ListItemText primary={primary} />
    </ListItem>
  );

  return (
    <Box>
      <StyledList>
        <List
          sx={{
            backgroundColor: "white",
            border: (theme) => `2px solid ${theme.palette.divider}`,
            marginX: { md: "50px", sm: "30px", xs: "20px" },
            borderRadius: "15px",
          }}>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "0px 0px 0px 0px",
              }}>
              <CardMedia
                component="img"
                image={Redwatch}
                style={{ width: "100%" }}
                alt="Paella dish"
              />
            </Card>
            <Typography
              sx={{
                fontSize: { md: "14px", sm: "13px", xs: "10px" },
                fontWeight: "600",
              }}>
              {userInfo?.firstName}   {userInfo?.lastName }
            </Typography>
          </Stack>
          <Divider />
          <CustomListItem
            to="/securitypage"
            primary={
              <Typography
                sx={{
                  color: selectedIndex === 1 ? "black" : "theme.blue", // Set the text color to white when selected
                  fontWeight: "400",
                  fontSize: { md: "15px", sm: "15px", xs: "14px" },
                }}
              >
                Dashboard
              </Typography>
            }
          />
          <CustomListItem
            to="/Editprofile"
            primary={<Typography>Edit Profile</Typography>}
          />
          <CustomListItem
            to="/orderhistory"
            primary={<Typography>Order History</Typography>}
          />
          <CustomListItem
            to="/Changepassword"
            primary={<Typography>Change Password</Typography>}
          />
          <CustomListItem
            to="/home"
            primary={<Typography>Log Out</Typography>}
          />
        </List>
      </StyledList>
    </Box>
  );
}
