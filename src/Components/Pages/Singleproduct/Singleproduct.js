import React, { useState } from "react";
import "./Singleproduct.css";
import Grid from "@mui/material/Grid";
import DescriptionSection from "./Productdescription/DescriptionSection";
import Featuredcategories from "./Featuredcategory/Featured";
import { Typography, Divider, Button, Stack } from "@mui/material";
import Chairimage from "../../images/back4.jpg";
import Iphoneimage from "../../images/fr.jpg";
import Callsupport from "../../Callsupport/Callsupport";
import Box from "@mui/material/Box";
import pinkimage from "../../images/pinkimage.png";
import { useParams } from "react-router-dom";
import productData from "../../data/productsData";
import { useDispatch } from "react-redux";
import { CartActions } from "../../../Store/Slices/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Layout from "../../Layout/Layout";


const data = [
  {
    image: Iphoneimage,
  },
  {
    image: Chairimage,
  },
];
const Carousel = () => {
  const { id } = useParams(); 
  const dispatch=useDispatch();
  const handleAddToCart=()=>{
    dispatch(CartActions.addItem({
      _id:id,
      name:"Iphone Mobile",
      price:1000,
      quantity:1
    }));
  }
  const [current, setCurrent] = useState(0);
  const slideTo = (index) => {
    setCurrent(index);
  };
 const [active, setActive] = useState(null);
  const handleClick = (id) => {
    if (active === id) {
      // Button is already active, so deactivate it
      setActive(null);
    } else {
      // Button is not active, so activate it
      setActive(id);
    }
  };
  // Extract id from URL parameters

  const product = productData.find(e => e.id === id); // Use extracted id
  console.log(product);
  return (
    <Layout>    
      <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          paddingX: { md: "75px", sm: "50px", xs: "40px" },
        }}
      >
        <Grid item lg={5} md={3} sm={12} xs={12}>
          <div className="carouselContent">
            <div className="content">
              {data.map((v, i) => {
                return (
                  i === current &&
                  (i === 2 ? (
                    <img src={v.image} alt=""/>
                  ) : (
                    <img src={v.image} alt=""/>
                  ))
                );
              })}
            </div>
            <div className="slideContainer">
              {data.map((v, i) => {
                return (
                  <div className="slideTo">
                    <img src={v.image} alt="" onClick={() => slideTo(i)} />
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        
        <Grid item  lg={7} md={9} sm={12} xs={12}>
          <Typography
            variant="h5"
            sx={{ paddingBottom: "10px", fontWeight: "bolder" }}
          >
            Apple Iphone 13 Pro Max
          </Typography>
          <div>
            <Divider />
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "10px", marginBottom: "8px" }}
            >
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Model:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  13 Pro Max
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Description:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa{" "}
                  <br /> qui officia deserunt mollit anim id es
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Brand:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Apple Original
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Store:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Hype Store
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Type:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Accessories/Phone
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                  Availability:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Typography variant="body1">In Stock</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Size:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12} >
                <Grid container spacing={2} sx={{ paddingBottom: "5px" }}>
                  <Grid item md={3} sm={3} xs={12}>
                    <button
                      key={1}
                      className={active === "1" ? "active" : undefined}
                      id={"button-size"}
                      onClick={() => handleClick("1")}  >
                      Small
                    </button>
                  </Grid>
                  <Grid item md={3} sm={3} xs={12}>
                    <button
                      key={2}
                      className={active === "2" ? "active" : undefined}
                      id={"button-size"}
                      onClick={() => handleClick("2")}  >
                      Medium
                    </button>
                  </Grid>
                  <Grid item md={3} sm={3} xs={12}>
                    <button
                      key={3}
                      className={active === "3" ? "active" : undefined}
                      id={"button-size"}
                      onClick={() => handleClick("3")} >
                      Large
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Color:
                </Typography>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                <Stack direction="row" spacing={2}>
                  <label class="container">
                    <input type="radio" name="color"/>
                    <span
                      class="checkmark"
                      style={{ background: "gray" }}
                    ></span>
                  </label>
                  <label class="container red">
                    <input type="radio" name="color"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="container pink">
                    <input type="radio" name="color"/>
                    <span class="checkmark"></span>
                  </label>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: {md:"5px",sm:'40px',xs:'60px'} }}>
              <Grid item md={4} sm={3} xs={6}>
                <Button
                  variant="contained"
                  size="large" 
                  fullWidth
                  sx={{ color: "white", padding: "10px" ,boxShadow:"0px 0px 0px 0px"}} >
                  Buy Now
                </Button>
              </Grid>
              <Grid item md={4} sm={3} xs={6}>
                <Button variant="outlined" size="large" fullWidth sx={{padding:"10px"}} onClick={handleAddToCart}>
                <ShoppingCartIcon sx={{ color: "#F7941D"}}/>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#F7941D",
                      paddingLeft: "5px",
                      textTransform:"lowercase"
                  
                    }} >
                    Add to Cart
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <br/>
    <DescriptionSection />
      <Featuredcategories />
      <Callsupport />
    </Box>
    </Layout>

  );
};

export default Carousel;
