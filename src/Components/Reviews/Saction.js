import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Personimage from "../images/person.png";
import Grid from "@mui/material/Grid";
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

  return (
    <Slider {...settings} ref={sliderRef}>
      {items.map((item, index) => (
            <Grid
          container
          spacing={2} 
          key={index}
          sx={{
            marginTop: "50px",
            paddingX: { md: "10px", sm: "50px", xs: "10px" },
          }}>
          <Grid item md={12} sm={12} xs={12}  >

          <Card   sx={{
                  ...cardStyle,
                }}>
            <CardActionArea>
              <img
                src={Personimage}
                style={{ margin: "auto", }}
                alt="person"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "600", color: "#000000" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{ textAlign: "center",color: "#7F7F7F"}} >
                  23rd Oct, 2023
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          </Grid>
      
      ))}
    </Slider>
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
  useEffect(()=>{
    if(window.innerWidth>700){
      setslidetoshow(2)
    }else{
      setslidetoshow(1)
    } 
   window.addEventListener('resize',()=>{
      if(window.innerWidth>700){
        setslidetoshow(2)
      }else{
        setslidetoshow(1)
      }
    })
  },[])
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <SimpleSlider settings={{...settings}}  sliderRef={sliderRef} />
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2} >
          <KeyboardBackspaceIcon   sx={{ color: "#7F7F7F",fontSize: "40px" }} onClick={previous}/>
      <ArrowRightAltIcon  onClick={next} sx={{ color: "#F7941D",fontSize: "60px" }}/>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Parent;
