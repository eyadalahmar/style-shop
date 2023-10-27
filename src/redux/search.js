import { createSlice } from "@reduxjs/toolkit";
const initialState={
    results:[]
}
export const search=createSlice({
    name:'results',
    initialState,
    reducers:{
        setResults:(state,action)=>{
            state.results=[...action.payload]
           
        }
    }
})
export const {setResults}=search.actions
export default search.reducer