import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Narrationimage from "../../Components/images/Bag.png";
import Narrationimage2 from "../images/Shoes.png";
import Narrationimage3 from "../images/wallet.png";
import Narrationimage4 from "../../Components/images/Ring.png";
import Narrationimage5 from "../images/watch-1.png";
import Narrationimage6 from "../images/Glasses.png";
import { Card } from "@mui/material";
import { Typography, CardContent } from "@mui/material";
import { Divider } from "@mui/material";
import Featuredstyle from '../Featuredcategory/Featured.style'

const Featured = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "50px",
            paddingX: { md: "65px", sm: "60px", xs: "40px" },
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: "#F7941D" }}>
              Featured Categories
            </Typography>
          </Grid>
        </Grid>
        <Divider
          variant="inset"
          sx={{ marginX: { md: "50px", sm: "0px", xs: "20px" }}}/>
        <Grid
          container
          spacing={2}
          sx={{
            paddingX: { md: "40px", sm: "50px", xs: "20px"},
            marginTop: "50px",
          }} >
          <Grid item md={4} sm={12} xs={12}>
            <Card sx={Featuredstyle.Featuredcard }>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading}>
                  Bags
                </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{ paddingX: "30px" }}>
                <Grid item xs={4}>
                  <img src={Narrationimage} style={{ width: "100%" }}/>
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage} style={{ width: "100%" }}/>
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage} style={{ width: "100%" }}/>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Card  sx={Featuredstyle.Featuredcard }>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading}
                >
                  Shoes
                </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{ paddingX: "30px" }}>
                <Grid item xs={4}>
                  <img src={Narrationimage2} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage2} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage2} style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Card  sx={Featuredstyle.Featuredcard }>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading} >
                  Wallets
                </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{ paddingX: "30px" }}>
                <Grid item xs={4}>
                  <img src={Narrationimage3} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage3} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage3} style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            paddingX: { md: "40px", sm: "40px", xs: "20px" },
            marginTop: "20px"}} >
          <Grid item md={4} sm={12} xs={12}>
            <Card sx={{ backgroundColor: "white", paddingY: "20px",boxShadow:"0px 0px 0px 0px",border: "1px solid #D5D5D5"}}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading}>
                  Jewellers
                </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{ paddingX: "30px" }}>
                <Grid item xs={4}>
                  <img src={Narrationimage4} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage4} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage4} style={{ width: "100%" }}/>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Card sx={{ backgroundColor: "white",paddingY: "20px",boxShadow:"0px 0px 0px 0px",border: "1px solid #D5D5D5"}}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading}> Watches </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{paddingX: "30px"}}>
                <Grid item xs={4}>
                  <img src={Narrationimage5} style={{width: "100%"}} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage5} style={{ width: "100%"}} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage5} style={{ width: "100%"}} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
            <Grid item md={4} sm={12} xs={12}>
            <Card sx={{ backgroundColor: "white",paddingY: "15px",boxShadow:"0px 0px 0px 0px",border: "1px solid #D5D5D5"}}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={Featuredstyle.Bagheading} >
                  Sun Glasses
                </Typography>
              </CardContent>
              <Grid container spacing={2} sx={{ paddingX: "20px" }}>
                <Grid item xs={4}>
                  <img src={Narrationimage6} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage6} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={4}>
                  <img src={Narrationimage6} style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Featured;
