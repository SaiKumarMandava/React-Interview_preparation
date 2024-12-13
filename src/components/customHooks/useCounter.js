import {useState} from 'react'

export default function useCounter(intialValue,extraValue) {
    const [count,setCount]=useState(intialValue)
  const incrementCount = () => {
    setCount((prev)=>prev+extraValue)
  }
  const resetCount = () => {
    setCount(intialValue)
  }

  return {count,incrementCount,resetCount}
}
