import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer, 
    }
})


export default store;