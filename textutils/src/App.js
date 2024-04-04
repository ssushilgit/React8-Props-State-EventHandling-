//  Change title dynamically

// import logo from './logo.svg';

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode , setMode] = useState('light'); //check whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled!", "success");
      document.title ="TextUtils - Dark Mode";
      // setInterval(()=> {
      //   document.title ="TextUtils is an Amazing Mode";
      // },2000);
      // setInterval(()=> {
      //   document.title ="Download TextUtils Now";
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title ="TextUtils - Light Mode";


    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" contact="Contact" mode={mode}  toggleMode={toggleMode} />
      {/* passing props */}
      {/* <Navbar/> */}

      <Alert alert={alert}/>


      <div className="container">  
        <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />
      </div> 
       
     {/* <About/> */}




    </>
  );
}

export default App;
