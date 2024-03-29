import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET } from "../../API/axios";

import {FetchProducts,getSingleProduct} from "../features/product"
const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        loading: false,
        products: [],
        totalProducts: 0,
        currentPage: 1,
    },
    reducers: {
        UpdateCurrentPage: (state, action) => {
            // Assuming that the payload of the action contains the new currentPage value
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(FetchProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(FetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(FetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "An error occurred";
          })
          .addCase(getSingleProduct.pending, (state) => {
            state.loading = true;
          })
          .addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "An error occurred";
          })
    },
});

export const { UpdateCurrentPage } = ProductSlice.actions;


export default ProductSlice.reducer;
