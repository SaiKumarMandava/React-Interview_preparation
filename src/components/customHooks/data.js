import React from 'react'
import useData from './useData'
export default function Data() {
    const {data,error} = useData('https://jsonplaceholder.typicode.com/users')
    
    if(error) return <p>{error}</p>
  return (
    <div>
        <ul>
      {data&&data?.map((item,index)=>{
       return <li key={index}>{item.name}</li>
      })}
      </ul>
    </div>
  )
}
