import React,{useReducer} from 'react'



const initialstate = {
    count:0
}

const reducer = (state,action)=>{
    switch(action.type){
        case "Increment":
            return {count:state.count+1}
        case "Decrement":
            if(state.count>0){
            return {count:state.count-1}
            }
        case "Reset":
            return {count:0}
        default:
            return state


    }
}
export default function Count() {
    const [state,dispatch]=useReducer(reducer,initialstate)
    
  return (
    <div>
      <p>{state?.count}</p>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>


    </div>
  )
}
