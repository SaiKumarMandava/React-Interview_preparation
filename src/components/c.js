import React from 'react'
import UpdatedComponent from './hoc'

const Counter1=({count,handleIncrement})=> {
  return (
    <div>
      
      <p>{count}</p>
      <button onClick={handleIncrement}>Click</button>
    </div>
  )
}

export default UpdatedComponent(Counter1);
