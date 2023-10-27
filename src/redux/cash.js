import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cash: null,
}
export const cash = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        setCash: (state, action) => { state.cash = action.payload }
    },
})

export const { setCash } = cash.actions
export default cash.reducer