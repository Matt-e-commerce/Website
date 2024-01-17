import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import productReducer from "./Slices/ProductSlice";
import authReducer from "./Slices/authSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        products:productReducer, 
        auth:authReducer
    }
})


export default store;