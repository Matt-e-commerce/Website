import React from 'react';
import { Box, Pagination, PaginationItem } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCurrentPage } from '../../../../Store/Slices/ProductSlice';

const Paginationcomp = () => {
  const { loading, totalProducts, currentPage } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const ProductPerPage = 12;

  const handleChange = (event, value) => {
    console.log(value);
    dispatch(UpdateCurrentPage(value));
  };

  return (
    <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', paddingX: { md: '0', sm: '0', xs: '20px' } }}>
      <Pagination
        count={Math.ceil(totalProducts / ProductPerPage)} // Total number of pages
        variant="outlined"
        shape="rounded"
        size="large"
        color="primary"
        page={currentPage} // Specify the active page
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            icon={
              item.type === "previous" ? (
                <ArrowBackIosIcon style={{ color: '#F7941D' }} />
              ) : item.type === "next" ? (
                <PlayArrowIcon style={{ color: '#F7941D' }} />
              ) : (
                undefined
              )
            }
            sx={{
              border: "2px solid #F7941D",
              color: item.selected ? "#FFFFFF" : '#B4B4B4',
              justifyContent: 'center',
              borderRadius: '15px',
              padding: { md: '15px', sm: '10px', xs: '0px' },
              backgroundColor: item.selected ? "#F7941D" : 'white',
              "&:hover": {
                backgroundColor: "#F7941D",
                color: "#FFFFFF",
              },
            }}
          >
            {item.page}
          </PaginationItem>
        )}
      />
    </Box>
  );
};

export default Paginationcomp;
