import React from 'react'

export default function CenterDiv() {
  return (
    <div style={{padding:"0px 0px 0px 0px"}}>
      <p style={{textAlign:"center",lineHeight:"1"}}>(without using flex,grid and traditional way.)</p>
    <div style={{padding:'6px 0px 0px'}}>
    <div className='parent'>
        <p style={{position:"absolute",margin:"-40px 0px 0px 30px",color:'white',fontWeight:"bold"}}>Parent</p>
        <div className='child'>
         <p style={{position:"absolute",margin:"65px 0px 0px 80px",fontWeight:"bold"}}>Child</p>
        </div>
    </div>
    </div>
     
    </div>
  )
}
