import { createSlice } from "@reduxjs/toolkit";
import axios  from "axios"
const initialState ={
    loading:false,
    users:[],
    error:null,
    currentUser:null,
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        getUser:(state)=>{
             state.loading = true
            
        },
        getUserSuccess:(state,action)=>{
            
             state.loading = false
             state.users = action.payload
             state.error = null
        },
        getCurrentUserSuccess:(state,action)=>{
            state.loading = false
            state.currentUser = action.payload
            state.error = null
        },
        getUserFailure:(state,action)=>{
             state.loading = false
             state.error = action.payload
        }
    }
})
export const {getUserSuccess, getUserFailure,getUser,getCurrentUserSuccess} =userSlice.actions
export const userSelector = (state)=>state.users

export const fetchUsers = ()=>async(dispatch)=>{
    dispatch(getUser())
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
       
        dispatch(getUserSuccess(response.data))
    }catch(error){
        dispatch(getUserFailure(error.message))
    }
    
 
}

export const fetchCurrentUser =(id)=>async(dispatch)=>{
  dispatch(getUser())
  try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      console.log(response.data)
      alert(response.data.name)
      dispatch(getCurrentUserSuccess(response.data))
  }catch(error){
      dispatch(getUserFailure(error.message))
  }

}

export const deleteUser =(id)=>async(dispatch)=>{
    console.log(id)
    dispatch(getUser())
    try{
      const response=  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      
      
      if (response.status === 204 || response.status === 200) {
        console.log(`User with ID ${id}, deleted successfully.`);
  
        dispatch(fetchUsers()) 

 
    
    } else {
        console.log("Unexpected response:", response);
      }
    //   dispatch(fetchUsers())
    }catch(error){
        dispatch(getUserFailure(error.message))
    }
}





export default userSlice.reducer;