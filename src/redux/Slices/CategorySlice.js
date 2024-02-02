import {  createSlice } from "@reduxjs/toolkit";
import { GET } from "../../API/axios";

import {FetchCategory} from "../features/product"
const CategorySlice = createSlice({
    name: "Category",
    initialState: {
        loading: false,
        categories: [],
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
        .addCase(FetchCategory.pending, (state) => {
            state.loading = true;
          })
          .addCase(FetchCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(FetchCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "An error occurred";
          })
    },
});

export const { UpdateCurrentPage } = CategorySlice.actions;


export default CategorySlice.reducer;
