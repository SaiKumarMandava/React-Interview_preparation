import React from 'react'
import useCounter from './useCounter'

export default function Couter1() {
    const {count,incrementCount,resetCount}= useCounter(10,2)
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
       <div>
       <p>Counter-1 using custom hook</p>
        <p style={{textAlign:"center"}}>{count}</p>
    <div style={{display:'flex',justifyContent:'center'}}>
    <button onClick={incrementCount}>Increment</button>
    <button onClick={resetCount} style={{margin:"0px 0px 0px 10px"}}>Reset</button>
    </div>
       </div>
    </div>
  )
}
