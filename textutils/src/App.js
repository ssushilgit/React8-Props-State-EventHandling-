// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode , setMode] = useState('light'); //check whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" contact="Contact" mode={mode}  toggleMode={toggleMode} />
      {/* passing props */}
      {/* <Navbar/> */}


      <div className="container">  
        <TextForm heading="Enter the text to analyze below:" mode={mode} />
      </div> 
       
     {/* <About/> */}




    </>
  );
}

export default App;
