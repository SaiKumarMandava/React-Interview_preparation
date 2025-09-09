
import React,{useEffect, useReducer} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const initialstate = {
    loading:true,
    error:null,
    fetchedData:null
    
}

const reducer = (state,action)=>{
    switch(action.type){
        case "Fetch-Success":
            return{
                ...state,
                loading:false,
                error:null,
                fetchedData:action.payload
            }
        case "Fetch-Failure":
             return {
        ...state,
        loading: false,
        error: action.payload,
        fetchedData: null
      };

    case "Fetch-Start":
      return {
        ...state,
        loading: true,
        error: null
      };

    default:
      return state;
    }
}

export default function DataFetchUseReducer() {
    const [state,dispatch] = useReducer(reducer,initialstate)
    console.log(state)

    const fetchApi = async()=>{
        dispatch({type:"Fetch-Start"})
        try{
           const response = await axios.get("https://dummyjson.com/recipes/search?q=")
           dispatch({type:"Fetch-Success",payload:response.data.recipes})

        }catch(error){
            console.log(error)
           dispatch({type:"Fetch-Failure",payload:error.message})

        }
    }

    useEffect(()=>{
      fetchApi()
    },[])
  return (
    <div>
      <p>Data Fetching Using useReducer</p>
      {state.loading&& (<p>loading...</p>)}
      {state.error && (<p>{state.error}</p>)}
      {state.fetchedData && (
        <ul>
        {state.fetchedData.map((item)=>(
            <li key={item?.id}>
                {item?.name}
            </li>
        ))
        
        }
        </ul>
      )}

    </div>
  )
}
