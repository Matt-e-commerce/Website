import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{itemList:[],itemCount:0},
    reducers:{
        addItem(state,action){
            const existingProduct=state.itemList.find((existing)=>existing._id===action.payload._id);
            if(existingProduct){
                existingProduct.quantity+=1;
                existingProduct.totalPrice+=existingProduct.price;
            }else{
                state.itemList.push(action.payload)
                state.itemCount+=1;
            }
        },
        removeItem(state,action){

        },
        increment(state,action){
            const existingProduct=state.itemList.find((existing)=>existing._id===action.payload);
            if(existingProduct){
                existingProduct.quantity+=1;
                existingProduct.totalPrice+=existingProduct.price;
            }
        },
        decrement(state,action){
            const existingProduct=state.itemList.find((existing)=>existing._id===action.payload);
            if(existingProduct){
                existingProduct.quantity-=1;
                existingProduct.totalPrice-=existingProduct.price;
            }
        },
    }
});

// exporting Actions of cart like addItem(),removeItem(),incremenet() etc
export const CartActions= cartSlice.actions;

export default cartSlice;

