import React, { useEffect, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import MyVideo from "../images/myvideo.mp4";
import Faq from "../FAQ/Faq";
import { Card, CardMedia } from "@mui/material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "30px" }}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            style={{ height: "400px", width: "100%", borderRadius: "20px" }}
            preload="auto"
            ref={videoRef}
            loop
          >
            <source src={MyVideo} type="video/mp4" />
          </video>

          <Box
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
            }}>
            <button
              className={`  button-style  play-button control-button ${
                isPlaying ? "active" : ""
              }`}
              onClick={handlePlayButtonClick}
            >
              {isPlaying ? (
                <PauseCircleOutlineIcon sx={{fontSize:'45px'}} />
              ) : (
                <PlayCircleFilledWhiteIcon sx={{fontSize:'45px'}} />
              )}
            </button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoPlayer;
