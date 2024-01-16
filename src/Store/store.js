import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import ProductSlice from "./Slices/ProductSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        products:ProductSlice, 
    }
})


export default store;