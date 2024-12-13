import React,{useState,useEffect} from 'react'

export default function Lights() {

    const [currentColor,setCurrentColor] = useState('green')




const trafficStates = {
   red: {
        backgroundColor: 'red',
        duration: 2000,
        next:"yellow"

    },
   yellow: {
        backgroundColor:'yellow',
        duration: 3000,
        next:"green"
    },
   green: {
        backgroundColor: 'green',
        duration: 2000,
        next:"red"
    }
}


useEffect(()=>{
 const {duration,next}= trafficStates[currentColor];
 const timerId = setTimeout(()=>{
    setCurrentColor(next)
 
 },duration)

 return () => clearTimeout(timerId)



},[currentColor])








const styles = {
conatinerStyle:{
    backgroundColor:"black",
    display:"flex",
    justifyContent:"space-between",
   
    
   gap:"20px",
    flexDirection:"column",
   padding:"20px",
   borderRadius:"5px",
    
},
lights:{
    width:"80px",
    height:"80px",
    backgroundColor:"gray",
    borderRadius:"80px",
    
}
}


  return (
   <div>
    <div style={{textAlign:"center"}}>
        <h1>Traffic Lights Simulation</h1>
    </div>
     <div style={{display:"flex",justifyContent:"center",margin:"0px 0px 0px 0px"}}>
        <div style={styles.conatinerStyle}>
      {Object.keys(trafficStates).map((item)=>{
      
        return <div key={item} style={{
            ...styles.lights,
            backgroundColor:item===currentColor&&trafficStates[item].backgroundColor|| styles.lights.backgroundColor
        }}
       
        ></div>
      })
     
      }
       </div>
    </div>
   </div>
  )
}
