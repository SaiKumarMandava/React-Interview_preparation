import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
  
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        },
        reset:(state)=>{
            state.count = 0
        },
        increaseCount:(state,{payload})=>{
            state.count += payload
        }
    }
})

export const { increment, decrement, reset ,increaseCount} = counterSlice.actions;

export const counterSelector = state=>state.counter.count


export const incrementCount = (count)=>async(dispatch)=>{
  await  dispatch(increaseCount(count))
}

export default counterSlice.reducer;