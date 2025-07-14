import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartFunc: (state, action) => {
      return [...state, { ...action.payload, qty: 1 }];
    },
    priceFunc: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.qty += 1;
        }
        return item;
      });
    },

    priceDecFunc : (state , action)=>{
      state.map((item) => {
        if (item.id === action.payload) {
          item.qty -= 1;
        }
        return item;
      });
    },

    removeFunc: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { cartFunc, priceFunc , removeFunc , priceDecFunc} = cartSlice.actions;

export default cartSlice.reducer;
