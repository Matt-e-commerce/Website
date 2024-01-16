import React from "react";
import "../ContactUs/Contact.css";
import Box from "@mui/material/Box";
import { Grid, Button, Typography, Card } from "@mui/material";
import { TextField } from "@mui/material";
import Layout from "../../Layout/Layout";
const Contact = () => {
  return (
    <Layout>
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "0px" }}>
        <Grid item xs={12} className="Contact-main">
          <Grid
            container
            spacing={2}
            sx={{
              paddingX: { md: "70px", sm: "0px", xs: "20px" },
              paddingY: { md: "70px", sm: "40px", xs: "30px" },
            }}
          >
            <Grid item md={12} sm={12} xs={12}>
              <div className="Contact-content">
                <h1>Contact Us</h1>
                <Typography>
                  You offer a good product, make advertising, analyze the market
                  but <br /> still have no improvement
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "20px",
          paddingX: { md: "70px", sm: "45px", xs: "20px" },
        }}
      >
        <Grid item   lg={3} md={12} sm={12} xs={12}>
          <Card sx={{ backgroundColor: "#F5F5F5", padding: "30px" }}>
            <Box sx={{ paddingBottom: "50px" }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },
                }}
              >
                Address:
              </Typography>
              <span
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },

                }}
              >
                4035 Heavens,
                <br />
                Los Angeles, California
              </span>
            </Box>
            <Box sx={{ paddingBottom: "50px" }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },

                }}
              >
                Phone:
              </Typography>

              <span
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },

                }}
              >
                +000 313 577 111
                <br />
                +000 313 577 222
              </span>
            </Box>
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{
                fontWeight: "600",
                lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                fontSize: { md: "18px", sm: "12px", xs: "10px" },

              }}
            >
              Email:
            </Typography>
            <span
              variant="subtitle1"
              sx={{
                fontWeight: "600",
                lineHeight: { md: "22.86px", sm: "18px", xs: "15px" },
                fontSize: { md: "18px", sm: "12px", xs: "10px" },

              }}
            >
              info@example.com
              <br />
              support@example.com
            </span>
          </Card>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                size="large"
                placeholder="Your Name"
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid #7F7F7F", // Add left border
                    transition: "border-left-color 0.2s", // Add transition effect
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid pink", // Add left border
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                size="large"
                placeholder="Your Email"
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid #7F7F7F", // Add left border
                    transition: "border-left-color 0.2s", // Add transition effect
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid pink", // Add left border
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: { md: "1px", sm: "8px", xs: "8px" },
            }}
          >
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                size="large"
                placeholder="Your Phone"
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid #7F7F7F", // Add left border
                    transition: "border-left-color 0.2s", // Add transition effect
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid pink", // Add left border
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                size="large"
                placeholder="Your Subject"
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid #7F7F7F", // Add left border
                    transition: "border-left-color 0.2s", // Add transition effect
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid pink", // Add left border
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            sx={{
              marginTop: { md: "1px", sm: "8px", xs: "8px" },
            }} >
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
              sm={12}
             
            >
              <TextField
                id="outlined-textarea"
                placeholder="Your Subject"
                multiline
                rows={5} // Adjust the number of rows as needed
                fullWidth // Takes up the full width of its container
                variant="outlined"
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid #7F7F7F", // Add left border
                    transition: "border-left-color 0.2s", // Add transition effect
                  },
                  "&:focus .MuiOutlinedInput-notchedOutline": {
                    borderLeft: "2px solid pink", // Add left border
                  },
                }}
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              color: "#FFFFFFE5",
              boxShadow: "0px 0px 0px 0px",
              fontSize: {md:"15px",sm:"20px",xs:'18px'},
              textTransform: "lowercase",
              borderRadius:'8px',
              fontWeight: "700",
              paddingX: { md: "45px", sm: "15px", xs: "10px" },
              paddingY: { md: "15px", sm: "15px", xs: "10px" },
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: { md: "10px", sm: "8px", xs: "8px" },
        }}
      >
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <Box sx="width: 100%">
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population calculator map
              </a>
            </iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
};

export default Contact;
