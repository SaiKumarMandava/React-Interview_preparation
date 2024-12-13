import {useState,useEffect} from 'react'

export default function useManageLocal({...intialValues}) {
      const [localData,setLocalData] = useState(intialValues)
      const [msg,setMessage]= useState('')
      const [edit,setEdit]= useState('')
      let items= JSON.parse(localStorage.getItem("item"))||[];

      const handleChange =(event)=>{
        const {name,value} =event.target
       
            setLocalData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          
      }
      const resetForm =()=>{
      
        const a = items.some((item)=>item.name ===localData.name);
        console.log(a)
      
      if(!a){
        items.push(localData);
        localStorage.setItem("item", JSON.stringify(items));
        setMessage('Data Saved To Local Storage Successfully')
       
      }else{
        console.log(" name exists")
     
        setMessage('Name already exists')
      }
      setLocalData(intialValues)
      setTimeout(()=>{
        setMessage('')
      },2000)
      }

const removeItem =(itemId)=>{
   
    const updatedItems = items.filter((item)=>item.id!==itemId);
    localStorage.setItem("item", JSON.stringify(updatedItems));
    setMessage(`Deleteded from local storage`)
    setTimeout(()=>{
        setMessage('')
      },2000)
}
console.log(items.find((item)=>item.id===edit))


const handleStartEdit = (itemId)=>{
    setEdit(itemId)
}
useEffect(() => {
    if (edit) {
      const editItem = items.find((item) => item.id === edit);
      if (editItem) {
        setLocalData({
          name: editItem.name,
          email: editItem.email,
        });
      }
    }
  }, [edit]);
console.log(localData)




const updateItem = (e) => {
    e.preventDefault();
    const updatedItems = items.map((item) =>
      item.id === edit
        ? { ...item, name: localData.name, email: localData.email }
        : item
    );
    localStorage.setItem("item", JSON.stringify(updatedItems));
    setMessage("Data Updated Successfully");
    setEdit("");
    setLocalData(intialValues); 
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };


  return {localData,updateItem,handleChange,resetForm,msg,edit,items,removeItem,handleStartEdit}
}
