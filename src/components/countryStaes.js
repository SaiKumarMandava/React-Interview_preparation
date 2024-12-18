import React, { useState } from 'react'

export default function CountryStaes() {

    const [countryState,setCountryState]= useState([])

const [data,setData]= useState({
    country: '',
    state: '',
    
})


const countryStates = {
    "countries":[
        {
            "country":"USA",
            "states":["New York","California"]
        },
        {
            "country":"UK",
            "states":["London","Manchester"]
        },
         {
            "country":"India",
            "states":["Andhra Pradesh","Telangana"]
        }
    
]
}


const handleChange = (e)=>{
    const countrys = e.target.value
    console.log(countrys)
   const state = countryStates.countries.find((c)=>c.country===countrys)
   console.log(state)
   setCountryState(state ? state.states:[])

}


const handleInputChange =(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted',data)
    setData({country:"",state:""})
}

  return (
    <div className='country'>
      <h1 style={{textAlign:"center"}}>Country & States Dropdown</h1>
      <p style={{textAlign:'center'}}>Populating states dropdown based on selected country </p>
   <div style={{padding:"20px 0px 0px 0px",display:"flex",flexDirection:"column",gap:"15px"}}>
   <select onChange={(e)=>{
    handleChange(e)
    handleInputChange(e)
    }}
    name="country"
    value={data.country}
    style={{padding:"5px",
color:data.country?"#000000":"#9CA3AF",
borderRadius:"5px",
width:"300px",
margin:"auto",
   


    }}
    
    >
     <option value=""disabled>Select Country</option>
     {countryStates.countries.map((country, index) => (
       <option key={index} value={country.country} style={{color:"black"}}>
         {country.country}
       </option>
     ))}
   </select>
   <select onChange={handleInputChange}
   
   name="state"
   value={data.state}
   style={{padding:"5px",
    borderRadius:"5px",

color:data.state?"#000000":"#9CA3AF",
width:"300px",
margin:"auto",

   }}

   >
     <option value="" disabled >Select State</option>
     {countryState.map((state, index) => (
       <option key={index} value={state.state} style={{color:"black"}}>
         {state}
       </option>
     ))}
   </select>
    <button onClick={handleSubmit}
    style={{padding:"10px",
        margin:"3px auto 0px auto",

    borderRadius:"5px",
    border:"1px solid gray",
    fontWeight:"bold",
    fontSize:"16px",
    lineHeight:"1.2",
    backgroundColor:"black",
    color:"white",
    cursor:"pointer",
    boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    ,width:"300px",
    
    }}
    
    >Submit</button>
   </div>
    </div>
  )
}
