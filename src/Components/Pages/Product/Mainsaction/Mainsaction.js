import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, Typography, Card, Radio } from "@mui/material";
import productimage from "../../../images/Product.png";
import Mainstyle from "../Mainsaction/Mainsaction.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Relatedtab from "../Relatedtab/Relatedtab";
import Paginationcomp from "../Paginationcomp/Paginationcomp";
import Featuredcategories2 from "../../../Featuredcategory/Featuredcategory";
import FormControlLabel from "@mui/material/FormControlLabel";
import Callsupport from "../../../Callsupport/Callsupport";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../../../redux/features/product";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  backgroundColor: "transparent",
  boxShadow: 24,
  p: 4,
  width: 300,
  maxHeight: "90%", // Set a maximum height
  overflow: "auto",
};
const About = () => {
  const {loading,currentPage}=useSelector((state)=>state?.products)
  const [expanded, setExpanded] = useState([true, true, true]); // Initialize to true for each Accordion\
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[panel] = isExpanded;
      return newExpanded;
    });
  };
  const accordionStyle = {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: "4px",
    boxShadow: "none", // Remove box shadow
    border: "none", // Remove border
    position: "relative",
    overflowAnchor: "none",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(FetchProducts(currentPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, currentPage]);
  const [categoryFilters, setCategoryFilters] = useState({
    categoryIds: [],
  });
  const [inputValues, setInputValues] = useState({
    priceMin : "",
    priceMax: "",
  });
  const [brandValues, setBrandValues] = useState({
    brandIds: [],
  });
  const [discountValues, setDiscountValues] = useState({
    discount: [],
  });
  const handleInputChange = (field, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: value,
    }));
  };
  const handleCheckboxChange = (name, checked) => {
    setCategoryFilters((prevCategoryFilters) => {
      if (checked) {
        // If checked, add the label to the category array
        return {
          ...prevCategoryFilters,
          categoryIds: [...prevCategoryFilters.categoryIds, name],
        };
      } else {
        // If unchecked, remove the label from the category array
        return {
          ...prevCategoryFilters,
          categoryIds: prevCategoryFilters.categoryIds.filter(
            (item) => item !== name
          ),
        };
      }
    });
  }; // discount
  const handleDiscountChange = (name, checked) => {
    setDiscountValues((prevDiscountValues) => {
      if (checked) {
        // If checked, add the brand to the array
        return {
          ...prevDiscountValues,
          discount: [...prevDiscountValues.discount, name],
        };
      } else {
        // If unchecked, remove the brand from the array
        return {
          ...prevDiscountValues,
          discount: prevDiscountValues.discount.filter((item) => item !== name),
        };
      }
    });
  };
  const handleBrandCheckboxChange = (name, checked) => {
    setBrandValues((prevBrandValues) => {
      if (checked) {
        // If checked, add the brand to the array
        return {
          ...prevBrandValues,
          brandIds: [...prevBrandValues.brandIds, name],
        };
      } else {
        // If unchecked, remove the brand from the array
        return {
          ...prevBrandValues,
          brandIds: prevBrandValues.brandIds.filter((item) => item !== name),
        };
      }
    });
  };
  const handleApplyFilter = () => {
    // Log the applied filters to the console
    console.log("Category Filters:", categoryFilters);
    console.log("Price Rang:", inputValues);
    console.log("Brand:", brandValues); // Use BrandValues instead of brandValues
    console.log("Selected discount:", discountValues);
  };
  const handleClearFilter = () => {
    // Clear all filters
    setCategoryFilters({
      categoryIds: [],
    });

    setInputValues({
      priceMin : "",
      priceMax: "",
    });

    setBrandValues({
      brandIds: [],
    });

    setDiscountValues({
      discount: "",
    });
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "30px",
          paddingX: { md: "95px", sm: "70px", xs: "38px" },
          borderRadius: "15px",
        }}
      >
        {/* Filter start */}
        <Grid lg={3} md={12} sm={12} xs={6} sx={Mainstyle.FilterSaction}>
          <Card sx={{ border: "1px solid #9B9B9B" }}>
            <Typography
              sx={{ color: "#3C3737", padding: "15px", fontWeight: "600" }}
            >
              Filters
            </Typography>
            <div>
              {[
                // {
                //   label: (
                //     <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                //       Categories
                //     </Typography>
                //   ),
                //   content: <CategoriesSection />,
                // },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Categories
                    </Typography>
                  ),
                  content: (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Laptop & Mac"
                            checked={categoryFilters.categoryIds.includes(
                              "Laptop & Mac"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            style={{ color: "#F7941D", fontSize: "14px" }}
                          >
                            Laptop & Mac
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Mobile & Tablet"
                            checked={categoryFilters.categoryIds.includes(
                              "Mobile & Tablet"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Mobile & Tablet
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="HOME DEVICES"
                            checked={categoryFilters.categoryIds.includes(
                              "HOME DEVICES"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Home Devices
                          </Typography>
                        }
                      />

                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            name="Fitness"
                            checked={categoryFilters.categoryIds.includes(
                              "Fitness"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Fitness
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            name="Games & Toys"
                            checked={categoryFilters.categoryIds.includes(
                              "Games & Toys"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Games & Toys
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            name="TV & Audio"
                            checked={categoryFilters.categoryIds.includes(
                              "TV & Audio"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            TV & Audio
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            name="Accessories"
                            checked={categoryFilters.categoryIds.includes(
                              "Accessories"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Accessories
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            color="primary"
                            name="Security"
                            checked={categoryFilters.categoryIds.includes(
                              "Security"
                            )}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="caption"
                            sx={{ fontSize: "14px" }}
                          >
                            Security
                          </Typography>
                        }
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Price Range
                    </Typography>
                  ),
                  content: (
                    <div>
                      <TextField
                        id="outlined-basic"
                        value={inputValues.priceMin }
                        onChange={(e) =>
                          handleInputChange("priceMin ", e.target.value)
                        }
                        label="From"
                      />
                      <br />
                      <br />
                      <TextField
                        id="filled-basic"
                        value={inputValues.priceMax}
                        onChange={(e) =>
                          handleInputChange("priceMax", e.target.value)
                        }
                        label="To"
                      />
                      <br />
                      <br />
                      <Typography>Price: $0.00 – $3200.00</Typography>
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Brand
                    </Typography>
                  ),
                  content: (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Apple"
                            checked={brandValues.brandIds.includes("Apple")}
                            onChange={(e) =>
                              handleBrandCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Apple
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Samsung"
                            checked={brandValues.brandIds.includes("Samsung")}
                            onChange={(e) =>
                              handleBrandCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Samsung
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Sony"
                            checked={brandValues.brandIds.includes("Sony")}
                            onChange={(e) =>
                              handleBrandCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Sony
                          </Typography>
                        }
                      />

                      <br />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="Oppo"
                            checked={brandValues.brandIds.includes("Oppo")}
                            onChange={(e) =>
                              handleBrandCheckboxChange(
                                e.target.name,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Oppo
                          </Typography>
                        }
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Discount
                    </Typography>
                  ),
                  content: (
                    <div>
                      <FormControlLabel
                        control={
                          <Radio
                            color="primary"
                            value="Any"
                            onChange={(e) =>
                              handleDiscountChange(
                                e.target.value,
                                e.target.checked
                              )
                            }
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Any
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Radio
                            value="no"
                            onChange={(e) =>
                              handleDiscountChange(
                                e.target.value,
                                e.target.checked
                              )
                            }
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            No
                          </Typography>
                        }
                      />
                      <br />
                      <FormControlLabel
                        control={
                          <Radio
                            value="yes"
                            onChange={(e) =>
                              handleDiscountChange(
                                e.target.value,
                                e.target.checked
                              )
                            }
                            color="primary"
                            sx={Mainstyle.checkboxsubheading}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={Mainstyle.checkboxsubheading}
                          >
                            Yes
                          </Typography>
                        }
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <Typography sx={{ color: "#3C3737", fontWeight: "600" }}>
                      Color
                    </Typography>
                  ),

                  content: (
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-1"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-2"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-3"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-4"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-5"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-6"]}></Card>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} sx={{ marginTop: "2px" }}>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-7"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-8"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-9"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-10"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-11"]}></Card>
                        </Grid>
                        <Grid item xs={2}>
                          <Card sx={Mainstyle["card-12"]}></Card>
                        </Grid>
                      </Grid>
                    </div>
                  ),
                },
              ].map((section, index) => (
                <Accordion
                  key={index}
                  expanded={expanded[index] || false}
                  onChange={handleAccordionChange(index)}
                  style={accordionStyle}
                >
                  <AccordionSummary
                    sx={{ backgroundColor: "#F1F1F1" }}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography>{section.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{section.content}</AccordionDetails>
                </Accordion>
              ))}
            </div>
            <br />
            <Grid
              container
              spacing={2}
              sx={{ marginTop: 2, backgroundColor: "#F1F1F1", margin: "auto" }}
            >
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={Mainstyle.fliterbutton}
                  onClick={handleApplyFilter}
                  fullWidth
                >
                  Apply Filter
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={Mainstyle.fliterbutton}
                  onClick={handleClearFilter}
                  fullWidth
                >
                  Clear Filter
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        {/* Filter End */}
        <Grid item spacing={2} lg={9} md={12} sm={12} xs={12}>
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "#FCF7FE",
              borderRadius: "15px",
              marginTop: { md: "0px", sm: "0px", xs: "10px" },
              textAlign: { md: "start", sm: "center", xs: "center" },
            }}
          >
            <Grid item md={6} sm={12} xs={12}>
              <img src={productimage} style={{ width: "100%" }} />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              sx={{
                margin: { md: "auto", sm: "0", xs: "0" },
              }}
            >
              <Typography sx={Mainstyle.Mainheading}>
                Online <br />
                <span
                  style={{
                    color: "#F7941D",
                    fontSize: { md: "3rem", sm: "3rem", xs: "1rem" },
                  }}
                >
                  Shopping
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "25px", fontWeight: "400" }}
              >
                Up to 50% off
              </Typography>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
                <br /> cillum dolore eu fugiat nulla pariatu
              </p>
              <Button sx={Mainstyle.Mainbutton}>Shop Now</Button>
            </Grid>
          </Grid>
          <div>
            <Grid
              container
              sx={{
                marginTop: { lg: "80px", md: "0px", sm: "0px", xs: "0px" },
                paddingX: { md: "20px", sm: "0px", xs: "0px" },
                backgroundColor: "white",
              }}
            >
              <Grid item lg={2} md={6} xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#484444",
                    fontWeight: "500",
                    marginTop: {
                      lg: "10px",
                      md: "20px",
                      sm: "20px",
                      xs: "20px",
                    },
                    display: {
                      lg: "none",
                      md: "block",
                      sm: "block",
                      xs: "block",
                    },
                  }}
                >
                  {" "}
                  Related To:{" "}
                </Typography>
              </Grid>
              <Grid item lg={2} md={6} xs={12} sm={6}>
                <Button
                  variant="contained"
                  sx={Mainstyle.Modalbutton}
                  onClick={handleOpen}
                >
                  Filter Now
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Card sx={{ border: "1px solid #9B9B9B" }}>
                      <Typography
                        sx={{
                          color: "#3C3737",
                          padding: "15px",
                          fontWeight: "600",
                        }}
                      >
                        Filters
                      </Typography>
                      <div>
                        {[
                          {
                            label: (
                              <Typography
                                sx={{ color: "#3C3737", fontWeight: "600" }}
                              >
                                Categories
                              </Typography>
                            ),

                            content: (
                              <div>
                                <Typography style={{ color: "#F7941D" }}>
                                  Laptop & Mac
                                </Typography>
                                <Typography>Mobile & Tablet</Typography>
                                <Typography>Home Devices</Typography>
                                <Typography>TV & Audio</Typography>
                                <Typography>Fitness</Typography>
                                <Typography>Games & Toys</Typography>
                                <Typography>TV & Audio</Typography>
                                <Typography>Accessories</Typography>
                                <Typography>Security</Typography>
                              </div>
                            ),
                          },
                          {
                            label: (
                              <Typography
                                sx={{ color: "#3C3737", fontWeight: "600" }}
                              >
                                Price Range
                              </Typography>
                            ),
                            content: (
                              <div>
                                <TextField id="outlined-basic" label="From" />
                                <br />
                                <br />
                                <TextField id="filled-basic" label="To" />
                                <br />
                                <br />
                                <Typography>Price: $0.00 – $3200.00</Typography>
                              </div>
                            ),
                          },
                          {
                            label: (
                              <Typography
                                sx={{ color: "#3C3737", fontWeight: "600" }}
                              >
                                Brand
                              </Typography>
                            ),
                            content: (
                              <div>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Apple
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Samsung
                                    </Typography>
                                  }
                                />
                                <br />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Sony
                                    </Typography>
                                  }
                                />

                                <br />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Oppo
                                    </Typography>
                                  }
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <Typography
                                sx={{ color: "#3C3737", fontWeight: "600" }}
                              >
                                Discount
                              </Typography>
                            ),
                            content: (
                              <div>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Any
                                    </Typography>
                                  }
                                />
                                <br />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      No
                                    </Typography>
                                  }
                                />
                                <br />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="allowExtraEmails"
                                      color="primary"
                                      sx={Mainstyle.checkboxsubheading}
                                    />
                                  }
                                  label={
                                    <Typography
                                      variant="body1"
                                      sx={Mainstyle.checkboxsubheading}
                                    >
                                      Yes
                                    </Typography>
                                  }
                                />
                              </div>
                            ),
                          },
                          {
                            label: (
                              <Typography
                                sx={{ color: "#3C3737", fontWeight: "600" }}
                              >
                                Color
                              </Typography>
                            ),

                            content: (
                              <div>
                                <Grid container spacing={2}>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-1"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-2"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-3"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-4"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-5"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-6"]}></Card>
                                  </Grid>
                                </Grid>
                                <Grid
                                  container
                                  spacing={2}
                                  sx={{ marginTop: "2px" }}
                                >
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-7"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-8"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-9"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-10"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-11"]}></Card>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Card sx={Mainstyle["card-12"]}></Card>
                                  </Grid>
                                </Grid>

                                <Grid
                                  container
                                  spacing={2}
                                  sx={{ marginTop: 2 }}
                                >
                                  <Grid
                                    item
                                    xs={12}
                                    sx={{
                                      backgroundColor: "#F1F1F1",
                                      padding: "10px",
                                    }}
                                  >
                                    <Button
                                      size="large"
                                      variant="contained"
                                      color="primary"
                                      sx={Mainstyle.fliterbutton}
                                    >
                                      Clear Filter
                                    </Button>
                                  </Grid>
                                </Grid>
                              </div>
                            ),
                          },
                        ].map((section, index) => (
                          <Accordion
                            key={index}
                            expanded={expanded[index] || false}
                            onChange={handleAccordionChange(index)}
                            style={accordionStyle}
                          >
                            <AccordionSummary
                              sx={{ backgroundColor: "#F1F1F1" }}
                              expandIcon={<ExpandMoreIcon />}
                            >
                              <Typography>{section.label}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {section.content}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </div>
                    </Card>
                  </Box>
                </Modal>
              </Grid>
            </Grid>
          </div>

          {loading ? (
            <Grid container spacing={2} sx={{ marginTop: "50px" }}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Skeleton variant="rounded" width={"95%"} height={50} />
              </Grid>
              {Array.from({ length: 12 }).map((_, index) => {
                return (
                  <Grid item lg={3} md={3} sm={12} xs={12} key={index}>
                    <Skeleton variant="rounded" width={"80%"} height={300} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <>
              <Relatedtab  />
            </>
          )}
          <Paginationcomp />
        </Grid>
      </Grid>
      <Featuredcategories2 />
      <Callsupport />
    </Box>
  );
};

export default About;
