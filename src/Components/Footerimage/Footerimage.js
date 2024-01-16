import React from 'react'
import { Grid } from "@mui/material";
import Narrationimage7 from "../../Components/images/off.png";


const Footerimage = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ paddingX: "40px", marginTop: "20px" }}>
        <Grid item xs={12}>
          <img src={Narrationimage7} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footerimage
