import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import productReducer from "./Slices/ProductSlice";
import authReducer from "./Slices/authSlice";
import categoryReducer from "./Slices/CategorySlice";
import brandReducer from "./Slices/BrandSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        products:productReducer, 
        auth:authReducer,
        categories:categoryReducer,
        brand:brandReducer,
    }
})


export default store;