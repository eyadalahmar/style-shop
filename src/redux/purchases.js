import { createSlice } from "@reduxjs/toolkit";
const initialState={
purList:null
}

export const purchases=createSlice({
    name:'purchases',
    initialState,
    reducers:{
        createPurList:(state)=>{state.purList=[]},
        addToPurList:(state,action)=>{state.purList.push(action.payload)}
    }
})
export const {createPurList,addToPurList} = purchases.actions


export default purchases.reducer