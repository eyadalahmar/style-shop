import { createSlice } from "@reduxjs/toolkit";
const initialState={
purList:[],
}

export const purchases=createSlice({
    name:'purchases',
    initialState,
    reducers:{
        createPurList:(state)=>{state.purList=[]},
        addToPurList:(state,action)=>{state.purList.push(action.payload)}
        ,removeFromPurList:(state,action)=>{state.purList.splice(action.payload,1)}
    }
})
export const {createPurList,addToPurList,removeFromPurList} = purchases.actions


export default purchases.reducer