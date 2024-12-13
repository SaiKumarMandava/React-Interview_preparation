import React, { useState } from 'react'

export default function List() {
  
 const [List1,setLis1] = useState([
    {title:"item1",checked:false},
    {title:"item2",checked:false},
    {title:"item3",checked:false} 

])
const [List2,setLis2] = useState([
    {title:"itemA",checked:false},
    {title:"itemB",checked:false},
    {title:"itemC",checked:false} 

])
const handleCheck =(id)=>{
    const updatedList1 = [...List1]
    updatedList1[id].checked =!updatedList1[id].checked
    setLis1(updatedList1)
}


const handleClick =()=>{
    const updatedList1 = [...List1]
    const updatedList2 = [...List2]
    updatedList1.forEach((item,index)=>{
        if(item.checked){
            [updatedList1[index].title, updatedList2[index].title]=[updatedList2[index].title, updatedList1[index].title]
        }
        updatedList1[index].checked=false
    }

    )
    setLis1(updatedList1)
    setLis2(updatedList2)

}

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Swapping List Items</h1>
     
     
      <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
        <div>
        <p style={{textAlign:""}}>List-1</p>
        <div>
            {List1?.map((item,index)=>(
                <div key={index}>
                    <input type="checkbox" checked={item.checked} 
                    onChange={()=>handleCheck(index)} 
                    />
                    {item?.title}
                </div>
            ))}
        </div>
        </div>
        <div>
        <p style={{textAlign:"center"}}>List-2</p>
      <ul>
        {List2.map((item,index)=>(
            <li key={index}>{item.title}</li>
        ))}

      </ul>
      </div>
      </div>
     <div style={{display:"flex", justifyContent:"center"}}>
     <button
      style={{width:"160px",padding:"5px"}}
      onClick={handleClick}
      >Swap</button>
     </div>
    </div>
  )
}
