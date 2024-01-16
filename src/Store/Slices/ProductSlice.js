import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET } from "../../API/axios";

export const FetchProducts = createAsyncThunk('FetchProducts', async (currentPage) => {
    try {
       
        const response = await GET(`product/getAllProductsUser?pageNumber=${currentPage}&limit=12`);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
});


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
            .addCase(FetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.Product;
                state.totalProducts = action.payload.data.totalProducts;
                // state=true;
            })
            .addCase(FetchProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(FetchProducts.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const { UpdateCurrentPage } = ProductSlice.actions;


export default ProductSlice.reducer;
