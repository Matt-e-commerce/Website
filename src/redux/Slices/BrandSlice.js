import {  createSlice } from "@reduxjs/toolkit";
import { GET } from "../../API/axios";

import {FetchBrand} from "../features/product"
const BrandSlice = createSlice({
    name: "Brand",
    initialState: {
        loading: false,
        brand: [],
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
        .addCase(FetchBrand.pending, (state) => {
            state.loading = true;
          })
          .addCase(FetchBrand.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(FetchBrand.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "An error occurred";
          })
    },
});

export const { UpdateCurrentPage } = BrandSlice.actions;


export default BrandSlice.reducer;
