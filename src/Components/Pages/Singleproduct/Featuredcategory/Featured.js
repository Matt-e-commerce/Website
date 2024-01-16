import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box,Stack  } from "@mui/material";
import Grid from "@mui/material/Grid";
import Narrationimage from "../../../images/redwatch.png";
import Watchimage from "../../../images/watch-1.png";
import Watchimage1 from "../../../images/watch-2.png";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SimpleSlider = ({ settings,sliderRef }) => {
  const cardStyle = {
    textAlign: "center",
    backgroundColor: "#F7F7F7",
    boxShadow:"0px 0px 0px 0px",
    padding:"5px"
  };
  const items = [
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
      title: 'Anna Merry',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
  ];
  const slides = [
    {
      src: Narrationimage,
      alt: "Slide 1",
    },
    {
      src: Watchimage,
      alt: "Slide 2",
    },
    {
      src: Watchimage1,
      alt: "Slide 3",
    },
  ];
  const [currentSlides, setCurrentSlides] = useState(Array(items.length).fill(0));
  const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  
  };
  const handlePreviousSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      if (newSlides[index] > 0) {
        newSlides[index] -= 1;
      }
      return newSlides;
    });
  };

   const handleNextSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      if (newSlides[index] < slides.length - 1) {
        newSlides[index] += 1;
      }
      return newSlides;
    });
  };
  return (
    <Box sx={{paddingX: { md: "45px", sm: "40px", xs: "30px" }}}>
    <Grid
    item
    container
    sx={{
      marginTop: "50px",
      backgroundColor: "white",
    }}>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Typography variant="h5" sx={{ color: "#F7941D",}}>
        Relevant Products
      </Typography>
    </Grid>
  </Grid>
  <Divider   sx={{ marginX:{ md: "10px", sm: "0px", xs: "0px" }}}/>
  <Slider {...settings} ref={sliderRef}>
      {items.map((item, index) => (
         <Grid
          container
          spacing={2}
          key={index}
          sx={{marginTop: "10px"}}>
             <Grid item md={12} sm={12} xs={12}>
            <Card sx={{boxShadow:"0px 0px 0px 0px",border:'2px solid #D9D9D9',borderRadius:'18px',backgroundColor: "white"}}> 
            <Grid container>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={2}>
                    <IconButton
                      onClick={() => handlePreviousSlide(index)}
                      disabled={currentSlides[index] === 0}>
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={8} sx={{height: '200px'}}>
                      <img
                        src={slides[currentSlides[index]].src}
                        alt={slides[currentSlides[index]].alt}
                        style={{margin:"auto"}}/>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      onClick={() => handleNextSlide(index)}
                      disabled={currentSlides[index] === slides.length - 1}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box display="flex">
              <Divider flexItem sx={{ marginRight: '16px', flexGrow: 1 }} />
              <Typography >Watch</Typography>
              <Divider flexItem sx={{ marginLeft: '16px', flexGrow: 1 }} />
            </Box>
            <Grid container spacing={2} sx={{ padding: '10px' }}>
              <Grid item xs={6} sx={{ display: 'flex' }}>
                <Typography variant="subtitle1"  >
                Apple Series
                </Typography>
              </Grid>
              <Grid item xs={6}  sx={{ display: "flex", justifyContent: "flex-end" }}  >
                <Typography variant="h6" sx={{ color: '#F7941D' }}>
                $2,435
                </Typography>
              </Grid>
            </Grid>
            <Typography  sx={{
                textAlign: "center",
                fontSize: "12px",
                color: "#7F7F7F",
                padding: "8px",
              }}>
            Apple Watch Series 8 features temperature sensing for insights
              into women's health, Car Crash Detection, and sleep stages to
              understand your sleep.
            </Typography>
            <br/>
          </Card>
          </Grid>
          </Grid>
        
       ))}
    </Slider>
    </Box>
  );
};
const Parent = () => {
 const [slidetoshow, setslidetoshow] = useState(2);
  const sliderRef = useRef(null);
   const next = () => {
    sliderRef.current.slickNext();
  };
   const previous = () => {
    sliderRef.current.slickPrev();
  };
  let b =window.innerWidth;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidetoshow,
    slidesToScroll: 2,
    arrows: false,
};
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 900) {
      setslidetoshow(4);
    } else if (window.innerWidth > 600) {
      setslidetoshow(2);
    } else {
      setslidetoshow(1);
    }
  };

  // Ensure initial setting based on the current window width
  handleResize();

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <SimpleSlider settings={{...settings}}  sliderRef={sliderRef} />
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
          <KeyboardBackspaceIcon sx={{ color: "#7F7F7F",fontSize: "40px" }} onClick={previous}/>
      <ArrowRightAltIcon  onClick={next} sx={{ color: "#F7941D",fontSize: "60px" }}/>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Parent;
