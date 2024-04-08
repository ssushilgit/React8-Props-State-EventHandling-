import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFormss from "./components/TextFormss";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from "./components/About";


function App() {
  const [mode, setMode] = useState('light'); // Check whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return <BrowserRouter>

    <Navbar title="TextUtils" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextFormss heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />} />
      </Routes>
    </div>
    {/* <About/> */}
    {/* <TextForm/> */}

  </BrowserRouter>

}

export default App;
