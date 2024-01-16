import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Divider,
  TableContainer,
  Button,
} from "@mui/material";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Shippingstyle from './Shoppingcart.style'
import Callsupport from "../../Callsupport/Callsupport";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";


const Shippingcart = () => {
  const cartProducts=useSelector(state=>state.cart.itemList);
  
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "white",
            height: 3,
            color: "#2E3192",
            fontWeight: "bold",
          },
        },
      },
    },
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "white",
      color: "#7F7F7F",
      fontWeight: "600",
    },
    [`&.${tableCellClasses.body}`]: {
      color: "#7F7F7F",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "white",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const [numbers, setNumbers] = useState([0, 0, 0]);

  const updateDisplay = (index) => {
    return numbers[index];
  };

  const handleDecrease = (index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = Math.max(updatedNumbers[index] - 1, 0);
    setNumbers(updatedNumbers);
  };

  const handleIncrease = (index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] += 1;
    setNumbers(updatedNumbers);
  };

  // const rows = [
  //   createData(
  //     <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
  //     <Card sx={{backgroundColor:'transparent',boxShadow:'0px 0px 0px 0px '}}>
  //     <CardMedia
  //    component="img"
  //    image={Redwatch}
  //    style={{ width: "100%", height: "80px"}} alt="Paella dish" />
  //    </Card>
  //    <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
  //      Samsung - Galaxy <br /> S6 4G
  //    </Typography>
  //  </Stack>,
  //     "Hype Mart",
  //     0,
  //     <Typography  sx={{color:'#F7941D',fontWeight:'500',fontSize:{md:'18px',sm:'15px',xs:'10px'}}}> $356,68.97
  //     </Typography>
  //   ),
  //   createData(
  //     <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
  //     <Card sx={{backgroundColor:'transparent',boxShadow:'0px 0px 0px 0px '}}>
  //     <CardMedia
  //    component="img"
  //    image={Redwatch}
  //    style={{ width: "100%", height: "80px"}} alt="Paella dish" />
  //    </Card>
  //    <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
  //      Samsung - Galaxy <br /> S6 4G
  //    </Typography>
  //  </Stack>,
  //     "Hype Mart",
  //     0,
  //     <Typography  sx={{color:'#F7941D',fontWeight:'500',fontSize:{md:'18px',sm:'15px',xs:'10px'}}}> $356,68.97
  //     </Typography>
  //   ),
  //   createData(
  //     <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
  //     <Card sx={{backgroundColor:'transparent',boxShadow:'0px 0px 0px 0px '}}>
  //     <CardMedia
  //    component="img"
  //    image={Redwatch}
  //    style={{ width: "100%", height: "80px"}} alt="Paella dish" />
  //    </Card>
  //    <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
  //      Samsung - Galaxy <br /> S6 4G
  //    </Typography>
  //  </Stack>,
  //     "Hype Mart",
  //     0,
  //     <Typography  sx={{color:'#F7941D',fontWeight:'500',fontSize:{md:'18px',sm:'15px',xs:'10px'}}}> $356,68.97
  //     </Typography>
  //   ),
  // ];

  return (
    <Layout>

    <Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { md: "10px", sm: "40px", xs: "20px" }, paddingX: { md: "25px", sm: '45px', xs: '25px' }}}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{marginBottom: "17px"}} >
          <Typography
            component="h1"
            variant="h5"
            sx={Shippingstyle.Shippingheading} >
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item container sx={{ marginTop: "10px" }}>
          <Grid
            item
            md={11}
            sm={12}
            xs={12}
            sx={ Shippingstyle.Tablecontainer}
          >
            <TableContainer >
              <Table
                sx={{
                  '& .MuiTableCell-sizeMedium': {
                    padding: { md: '20px ', sm: '16px', xs: '9px' },
                  },
                  minWidth: 100
                }}
                aria-label="a dense table"
              >
                <TableHead sx={{ fontSize: { md: "18px", sm: "18px", xs: "12px" } }}>
                  <TableRow>
                    <StyledTableCell>Product</StyledTableCell>
                    <StyledTableCell>Store</StyledTableCell>
                    <StyledTableCell>Quantity</StyledTableCell>
                    <StyledTableCell align="center">Total</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartProducts.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>{'Store'}</StyledTableCell>
                      <StyledTableCell>
                        <Box>
                          <Grid
                            container
                            spacing={2} >
                          <Grid
                         md={8}
                         sm={8}
                         xs={12}
                           
                            sx={Shippingstyle.Numbercountersaction}>
                            <Card sx={Shippingstyle.quantitystyle}>
                              <RemoveIcon
                                onClick={() => handleDecrease(index)}
                                sx={{ color: "#7F7F7F" }}
                              />
                            </Card>
                            <Divider orientation="vertical"  flexItem />
                         <Card sx={Shippingstyle.quantitystyle}>
                              <Typography
                                sx={{
                                  color: "#0a202d",
                                  fontSize: { md: "14px", sm: '20px', xs: '15px' },
                                  fontWeight: "bold",
                                }}>
                                {/* {updateDisplay(index)} */}
                                {row.quantity}
                              </Typography>
                            </Card>
                            <Divider orientation="vertical" flexItem />

                            <Card sx={Shippingstyle.quantitystyle} >
                              <AddIcon
                                onClick={() => handleIncrease(index)}
                                sx={{ color: "#7F7F7F" }}
                              />
                            </Card>
                          </Grid>
                          </Grid>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">{"$"+row.price}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider />
            <Grid container spacing={2} sx={{ paddingX: '40px', paddingBottom: "20px" }}>
              <Grid
                item
                xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography sx={{ fontWeight: '600', color: '#000000', fontSize: '18px', paddingRight: '40px' }}>Cart Totals</Typography>
                <Typography sx={{ color: '#F7941D', fontWeight: '600', fontSize: '16px' }}>$1,591.00</Typography>
              </Grid>
              <Button
                variant="contained"
                size="large"
                sx={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: 'white',
                  marginLeft: "auto",
                  borderRadius: '40px',
                  paddingX: { md: "30px", sm: "15px", xs: "10px" },
                  paddingY: { md: "15px", sm: "15px", xs: "10px" }
                }}>
                Proceed to Check Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Callsupport/>

    </Box>
    </Layout>
  );
};

export default Shippingcart;
