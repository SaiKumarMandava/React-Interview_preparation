import React, { useState } from 'react'

export default function LiftingStateup() {
    const [listItems,setListItems] =useState(["List1","List2","List3","List4","List5","List6"])
  return (
    <div>
      <TotalList listItems={listItems}/>
      <ListItems listItems={listItems}/>
      <AddListItem setListItems={setListItems}/>
    </div>
  )
}


const TotalList = ({listItems})=>{
    return(
        <>
        <p>Total list items - {listItems.length}</p>
        </>
    )
}
const ListItems = ({listItems})=>{
    return(
        <div style={{display:"flex"}}>
        <p style={{width:"100px"}}>List items -</p>
        <ul className='listItem' style={{width:"120px",flexWrap:"wrap",height:"120px",overflowY:"scroll"}}>
            {listItems.map((item,index)=>(
                <li key={index}
                 style={{textTransform :"capitalize",padding:"5px"}}>
                    {item}
                    {/* {index < listItems.length - 1 && ","} */}
                    
                    </li>
            ))}
        </ul>
        </div>
    )
}

const AddListItem = ({setListItems})=>{
    const [values,setValues] = useState('')
    const [message,setMessage]= useState('')
    const hanleChange =(e)=>{
        setValues(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!values){
            setMessage("Please enter list item.")
          
            setTimeout(()=>{
                setMessage("")
            },2000)
          
            return 0;
        }
        setListItems((prev)=>[...prev,values])
        setValues('')
        setMessage('')
    }

   
    return(
        <div style={{width:"200px"}}>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"10px",padding:"5px 0px 0px 0px"}}>
                <p style={{position:"absolute",margin:"-20px 0px 0px 15px",color:"red"}}>{message}</p>
                <input type="text" name='values' id='sd' placeholder="Enter new list item" value={values} onChange={hanleChange} style={{margin:"5px 0px 0px 0px",
                    padding:"3px"
                }} required/>
                <button type="submit" style={{padding:"3px"}}>Add</button>
               
            </form>
        </div>
    )
}