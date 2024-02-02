import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{itemList:[],itemCount:0},
    reducers:{
        addItem(state, action) {
            const existingProduct = state.itemList.find((existing) => existing._id === action.payload._id);
            if (existingProduct) {
                return {
                    ...state,
                    itemList: state.itemList.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    itemList: [...state.itemList, { ...action.payload, quantity: 1, totalPrice: action.payload.price }],
                    itemCount: state.itemCount + 1,
                };
            }
        },
        removeItem(state, action) {
            return {
                ...state,
                itemList: state.itemList.filter((item) => item._id !== action.payload),
                itemCount: state.itemCount - 1,
            };
        },
        increment(state, action) {
            return {
                ...state,
                itemList: state.itemList.map((item) =>
                    item._id === action.payload ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price } : item
                ),
            };
        },
        decrement(state, action) {
            return {
                ...state,
                itemList: state.itemList.map((item) =>
                    item._id === action.payload ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price } : item
                ),
            };
        },
    }
});

// exporting Actions of cart like addItem(),removeItem(),incremenet() etc
export const CartActions= cartSlice.actions;

export default cartSlice;

