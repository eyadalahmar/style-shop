import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemi: null,
};

export const item = createSlice({
  name: "item",
  initialState,
  reducers: {
   setItemi:(state,action)=>{
    if(action.payload==null)state.itemi=null
   else state.itemi=action.payload
   }
  },
});

export const { setItemi } = item.actions;

export default item.reducer;