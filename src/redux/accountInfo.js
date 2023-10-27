import { createSlice } from "@reduxjs/toolkit";

const initialState={
    account:null,
}
export const accountInfo=createSlice({
    name:'accountInfo',
    initialState,
    reducers:{
        setInfo:(state,action)=>{
            state.account=action.payload
        }
    }
})

export const {setInfo}=accountInfo.actions
export default accountInfo.reducer