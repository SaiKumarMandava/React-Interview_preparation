import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Users from "./components/users";
import Lights from "./components/lights";
import List from "./components/list";
import Counter1 from "./components/c";
import Counter2 from "./components/c1";
import Data from "./components/customHooks/data";
import Countercustom1 from "./components/customHooks/couter1";
import Countercustom2 from "./components/customHooks/counter2";
import LiftingStateup from "./components/liftingStateup";

import { counterContet } from "./components/context";
import { useState } from "react";
import DisplayCount from "./components/displayCount";
import CenterDiv from "./components/centerDiv";
import Form from "./components/customHooks/form";
import Sedg from "./components/s";
import CountryStaes from "./components/countryStaes";
import AutoComplete from "./components/autoCompleteSearch/search";
import StyleComp from "./components/styledComp/stylecomponent";
import Count from "./components/useReducer/count";
import DataFetchUseReducer from "./components/useReducer/DataFetchUseReducer";
function App() {
  const [count, setCount] = useState(1);

  const savedTheme = localStorage.getItem("theme");
  const [buttonText, setButtonText] = useState("Switch To Dark");
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  if (savedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  const toggleMode = (e) => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setButtonText("Switch To Light");
      setDarkMode();
    } else {
      setLightMode();
      setButtonText("Switch To Dark");
    }
  };

  return (
    <div className="toggles">
      <div>
        <AutoComplete />
        <div>
          <button onClick={toggleMode}>{buttonText}</button>
        </div>
      </div>
      {/* <div>
        <StyleComp />
      </div> */}
      <Count/>
      <DataFetchUseReducer/>
    </div>
  );
}

export default App;

{
  /* <div style={{display:"flex",justifyContent:"center"}}>
     <Counter/>
     </div>
     */
}
{
  /* <Users/>  */
}
{
  /* <div  className='contain'>
     <div className='bbb'>
     <Lights/>
     </div>
     <div className='bbb'>
     <List />
     </div>
     <div className='bbb'>

     <div style={{display:"flex",justifyContent:"center",
      gap:"30px",
      flexDirection:"column",margin:"0px 0px 10px 0px"}}>
     <h1 style={{textAlign:"center"}}>Higherorder Components</h1>

  <div style={{display:"flex",gap:"30px",justifyContent:"center",margin:"-30px 0px 0px 0px"}}>
  <Counter1/>
  <Counter2/>
  </div>

  </div>
  <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
     <h1 style={{textAlign:"center"}}>ContextApi to avoid prop drilling</h1>
   <div style={{display:"flex",justifyContent:"center"}}>
   <counterContet.Provider value={{count,setCount}}>
       <DisplayCount/>
       </counterContet.Provider>
   </div>
     </div>
     </div>
     <div className='bbb'>

    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
    <h1 style={{textAlign:"center"}}>Data fetching using custom hook</h1>
   <div style={{display:"flex",justifyContent:"center"}}>
     
   <Data/>
   </div>
    </div>
    </div>
    
    <div className='bbb'>
    <div style={{display:"flex", gap:"30px",justifyContent:"center",flexDirection:"column"}}>
     <h1 style={{textAlign:"center",margin:"20px 0px 0px 0px"}}>State management using custom hook</h1>
  <div>
  <div>
     <Countercustom1/>
     <Countercustom2/>
     </div>
  </div>
     </div>
    </div>
   
    <div className='bbb'>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
     <h1 style={{textAlign:"center"}}>Lifting state up</h1>
     <p style={{textAlign:"center"}}>updating state by child component to parent</p>
      <div style={{display:"flex",justifyContent:"center",padding:"0px"}}>
      <LiftingStateup/>
      </div>
     </div>
    </div>
   
  
  <div className='bbb'>
    <h1 style={{textAlign:"center",lineHeight:"0.2"}}>Center a Div</h1>
  <CenterDiv/>

  </div>
<div className='bbb'>
<Form/>
</div>
<div className='bbb'>
<Sedg/>
</div>
<div className='bbb'>
<CountryStaes/>
</div>
 
    </div> */
}
