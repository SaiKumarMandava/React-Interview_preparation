import React, { useEffect, useState } from 'react'
import useManageLocal from './useManageLocal'
export default function Form() {

    const {localData,handleChange,updateItem,resetForm,msg,handleStartEdit,edit,items,removeItem}= useManageLocal({id:Date.now(),name:"",email:""})
    const [a,SetA]= useState(false)
  

useEffect(()=>{
    if(localData.email==='' && localData.name===''){
        return SetA(false)
     }else{
         return SetA(true)
     }
},[localData.email])

    const onSubmit = (e)=>{
        e.preventDefault()
        
  
      
        resetForm()
        
    }

    const handleDelete = (itemId)=>{
        removeItem(itemId)
    }
    
return (
    <div>
        <h2 style={{textAlign:'center'}}>Managing Local Storage Using Custom-Hook</h2>
       
   <div>
    {edit?(
    
        <form onSubmit={updateItem} style={{padding:"10px"}}>
           
        <div style={{display:'flex', gap:"8px"}}>
            <label>Name:</label>
            <input type='text' 
            name="name" 
            value={localData.name} 
            onChange={handleChange}
            required
            />
        </div>
        <div style={{display:'flex', gap:"12px",padding:"10px 0px 0px 0px"}}>
            <label>Email:</label>
            <input type='email' 
            name="email" 
            value={localData.email} 
            onChange={handleChange}
            required
            disabled
            />
        
        </div>
      <button type='submit'>Update</button>
      </form>
    ):(
<form onSubmit={onSubmit} style={{padding:"10px"}}>
        <div style={{display:'flex', gap:"8px"}}>
            <label>Name:</label>
            <input type='text' 
            name="name" 
            value={localData.name} 
            onChange={handleChange}
            required
            />
        </div>
        <div style={{display:'flex', gap:"12px",padding:"10px 0px 0px 0px"}}>
            <label>Email:</label>
            <input type='email' 
            name="email" 
            value={localData.email} 
            onChange={handleChange}
            required
            />
        
        </div>
      <button type='submit' disabled={!a}>Submit</button>
      </form>
    )}
   
   </div>
      <div>
      <p style={{position:'absolute',margin:"-6px 0px 0px 0px"}}>{msg}</p>
      </div>
      <div>
        <h3>Items in Local Storage:</h3>
      <div>
     {items.length > 0 ?(
         <table>
       <thead>
         <tr>
             <th>S.No</th>
             <th>Name</th>
           
             <th>Action</th>
         </tr>
         </thead>
     <tbody style={{width:"100px"}}>
         {items.map((item,index)=>(
             <tr key={index} >
                 <td>{index+1}</td>
                 <td>{item.name}</td>
               <td><button onClick={()=>handleStartEdit(item.id)}>Edit</button></td>
                 <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>

             </tr>
         )) 
         

         }
     </tbody>
    </table>
     ):"No Data From Local Storage"

     }
      </div>
      </div>
    </div>
  )
}
