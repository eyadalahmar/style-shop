import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  buyStatus: null,
};

export const buy = createSlice({
  name: "buy",
  initialState,
  reducers: {
   setBuy:(state,action)=>{
    state.buyStatus=action.payload
   }
  },
});

export const { setBuy } = buy.actions;

export default buy.reducer;