import React, { useEffect, useState } from 'react'

export default function Sedg() {
    const [images,setImages]= useState([])
    // const handleChange =(e)=>{
    //     const files = Array.from(e.target.files)
    //     setImage(files)
    // }


   const handleChange = (e)=>{
    const file = Array.from(e.target.files);
    console.log(file)
  
        setImages((prev)=>[...prev,...file])

       
    
    e.target.value= null
    
   }





  return (
    <div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {images?.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded preview ${index + 1}`}
                        width={100}
                    />
                ))}
            </div>
      <input type='file' onChange={handleChange} multiple/>
    </div>
  )
}
