import React from 'react'
import { useContext } from 'react'
import { counterContet } from './context';

export default function DisplayCount() {
    const { count } = useContext(counterContet)
  return (
    <div >
      <p>Counter value - {count}</p>
      <Button/>
    </div>
  )
}


const Button = ()=>{
const {setCount} = useContext(counterContet)

    const handleIncrement = ()=>{
        setCount((prev)=>prev+1)
    }

    return(
        <div>
            <button onClick={handleIncrement}>Increment Count</button>
        </div>
    )
}