import React from 'react'
import UpdatedComponent from './hoc'


const Counter2=({count,handleIncrement})=> {
  return (
    <div>
       <p>{count}</p>
       <button onMouseOver={handleIncrement}>Hover me</button>
    </div>
  )
}
export default UpdatedComponent(Counter2);
